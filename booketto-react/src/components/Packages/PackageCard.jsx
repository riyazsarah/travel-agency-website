import styles from './Packages.module.css';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function formatPrice(price) {
  return price.toLocaleString('en-IN');
}

export default function PackageCard({ pkg, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={pkg.image} alt={pkg.title} className={styles.image} loading="lazy" />
          <span
            className={styles.badge}
            style={{ background: pkg.badgeColor }}
          >
            {pkg.badge}
          </span>
        </div>

        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <CalendarIcon /> {pkg.nights} Nights
            </span>
            <span className={styles.metaItem}>
              <UserIcon /> {pkg.persons} Persons
            </span>
            <span className={styles.metaItem}>
              <StarIcon /> {pkg.rating}
            </span>
          </div>

          <h3 className={styles.cardTitle}>{pkg.title}</h3>
          <p className={styles.cardDesc}>{pkg.description}</p>

          <div className={styles.footer}>
            <div className={styles.price}>
              <span className={styles.priceAmount}>&#8377;{formatPrice(pkg.price)}</span>
              <span className={styles.pricePer}>/ person</span>
            </div>
            <Button variant="primary" size="sm" href="#booking">
              Book Now
            </Button>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
