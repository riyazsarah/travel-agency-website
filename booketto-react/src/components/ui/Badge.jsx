import styles from './Badge.module.css';
import { cn } from '../../utils/cn';

export default function Badge({ children, color = 'var(--accent-blue)', className }) {
  return (
    <span
      className={cn(styles.badge, className)}
      style={{
        borderColor: color,
        color,
      }}
    >
      {children}
    </span>
  );
}
