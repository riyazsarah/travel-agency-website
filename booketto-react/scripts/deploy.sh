#!/bin/bash
set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────
APP_NAME="booketto-website"
K8S_DEPLOYMENT="booketto-website"
K8S_NAMESPACE="personal"
K3D_CLUSTER="mac-mini-lab"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# ─── Colors ──────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${BLUE}[deploy]${NC} $*"; }
ok()   { echo -e "${GREEN}[  ok  ]${NC} $*"; }
warn() { echo -e "${YELLOW}[ warn ]${NC} $*"; }
err()  { echo -e "${RED}[error ]${NC} $*" >&2; }

# ─── Preflight checks ───────────────────────────────────────────────
log "Running preflight checks..."
for cmd in node npm docker kubectl k3d; do
  if ! command -v "$cmd" &>/dev/null; then
    err "$cmd is not installed"
    exit 1
  fi
done

if ! k3d cluster list 2>/dev/null | grep -q "$K3D_CLUSTER"; then
  err "k3d cluster '$K3D_CLUSTER' not found"
  exit 1
fi
ok "All tools available, cluster '$K3D_CLUSTER' is running"

# ─── Build ───────────────────────────────────────────────────────────
cd "$PROJECT_DIR"

log "Installing dependencies..."
npm ci --silent 2>/dev/null || npm install --silent
ok "Dependencies installed"

log "Building Vite/React site..."
npm run build
ok "Site built successfully"

# ─── Docker ──────────────────────────────────────────────────────────
IMAGE_TAG="${APP_NAME}:latest"

log "Building Docker image: ${IMAGE_TAG}"
docker build -t "$IMAGE_TAG" .
ok "Docker image built"

log "Importing image into k3d cluster..."
k3d image import "$IMAGE_TAG" -c "$K3D_CLUSTER"
ok "Image imported into cluster"

# ─── Deploy ──────────────────────────────────────────────────────────
log "Applying k8s manifests..."
K8S_MANIFEST="/Users/riyaz/k8s-manifests/personal/booketto-website.yaml"
if [ -f "$K8S_MANIFEST" ]; then
  kubectl apply -f "$K8S_MANIFEST"
  ok "Manifests applied"
else
  warn "Manifest not found at $K8S_MANIFEST, skipping apply"
fi

log "Restarting deployment..."
kubectl rollout restart deployment "$K8S_DEPLOYMENT" -n "$K8S_NAMESPACE"

log "Waiting for rollout..."
kubectl rollout status deployment "$K8S_DEPLOYMENT" -n "$K8S_NAMESPACE" --timeout=120s
ok "Rollout complete"

# ─── Verify ──────────────────────────────────────────────────────────
log "Verifying deployment..."
POD_STATUS=$(kubectl get pods -n "$K8S_NAMESPACE" -l "app=$K8S_DEPLOYMENT" -o jsonpath='{.items[0].status.phase}')
if [ "$POD_STATUS" = "Running" ]; then
  ok "Pod is running"
else
  err "Pod status: $POD_STATUS"
  exit 1
fi

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: panasia.udyami.ai" http://localhost/ --max-time 10 || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
  ok "Site responding with HTTP 200"
else
  warn "Site returned HTTP $HTTP_CODE (may still be starting up)"
fi

echo ""
ok "Deployment complete! Site: https://panasia.udyami.ai"
