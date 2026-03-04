# Pan Asia Tours & Travels

Modern travel agency website for **Pan Asia Tours and Travels Pvt Ltd** — an IATA-certified travel partner offering curated domestic and international tour packages.

Live at: **https://panasia.udyami.ai**

## Tech Stack

- **React 19** + **Vite** — fast dev/build tooling
- **GSAP** + **Framer Motion** — parallax scrolling, scroll-triggered reveals, Ken Burns video transitions
- **CSS Modules** — scoped component styles with CSS custom properties
- **Nginx Alpine** — production static serving with SPA routing

## Features

- Hero section with crossfading drone videos (Kashmir & Kerala) and Ken Burns zoom/pan
- 13 destination cards with filterable grid (Domestic / International)
- 6 curated travel packages with pricing
- Animated stats counters, scroll-reveal animations
- Fully responsive — mobile-first with touch-optimised video autoplay
- WhatsApp floating CTA for instant enquiries

## Project Structure

```
src/
├── components/       # React components (Hero, Nav, Destinations, Packages, etc.)
├── data/             # Static data (destinations, packages)
├── styles/           # Global CSS variables and resets
└── utils/            # Helper utilities
public/
├── kerala-heritage.mp4   # Optimised local hero video (3.3MB, no audio)
├── logo.png              # Pan Asia brand logo
├── robots.txt
└── sitemap.xml
scripts/
└── deploy.sh         # One-command build + Docker + k3d deploy
```

## Development

```bash
npm install
npm run dev           # http://localhost:5173
```

## Production Build

```bash
npm run build         # outputs to dist/
```

## Deployment (k3s)

Deploys to a k3d cluster with Cloudflare Tunnel:

```bash
bash scripts/deploy.sh
```

This script:
1. Installs dependencies and builds the Vite production bundle
2. Builds a Docker image (`nginx:alpine` + `dist/`)
3. Imports the image into the k3d cluster
4. Applies Kubernetes manifests (Deployment, Service, Ingress)
5. Restarts the rollout and verifies the pod is running

**Infrastructure:**
- **Cluster:** k3d (`mac-mini-lab`)
- **Ingress:** Traefik
- **Tunnel:** Cloudflare Tunnel → `panasia.udyami.ai`
- **Namespace:** `personal`
