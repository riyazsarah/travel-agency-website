import styles from './SectionHeader.module.css';
import { cn } from '../../utils/cn';

export default function SectionHeader({ label, title, subtitle, align = 'left', accent = 'var(--accent-blue)', className }) {
  return (
    <div className={cn(styles.header, styles[align], className)}>
      {label && (
        <span className={styles.label} style={{ color: accent }}>
          {label}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
