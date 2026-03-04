import styles from './DestinationCard.module.css';
import { accentMap } from '../../data/destinations';

export default function DestinationCard({ destination }) {
  const accent = accentMap[destination.category] || 'var(--accent-blue)';

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={destination.image}
        alt={destination.name}
        loading="lazy"
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.tag} style={{ color: accent }}>
          {destination.tag}
        </span>
        <h3 className={styles.name}>{destination.name}</h3>
        <p className={styles.desc}>{destination.description}</p>
        <button
          className={styles.exploreBtn}
          style={{ background: accent }}
          type="button"
        >
          Explore {destination.name}
        </button>
      </div>
    </div>
  );
}
