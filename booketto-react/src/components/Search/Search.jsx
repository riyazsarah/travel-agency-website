import styles from './Search.module.css';
import { searchTags } from '../../data/company';
import ScrollReveal from '../ui/ScrollReveal';

const destinationOptions = [
  'Dubai', 'Abu Dhabi', 'Malaysia', 'Singapore', 'Thailand',
  'Oman', 'India', 'Vietnam', 'Turkey', 'Indonesia', 'Baku', 'Saudi Arabia',
];

const tripTypes = [
  'Holiday Package', 'Flight + Hotel', 'Attractions Only',
  'Airport Transfer', 'Custom Tour',
];

/* ── Lucide-style SVG icons ── */
const MapPinIcon = () => (
  <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CompassIcon = () => (
  <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default function Search() {
  return (
    <section className={styles.section} id="search">
      <ScrollReveal>
        <div className={styles.heading}>
          <h2>Find Your <span>Perfect</span> Getaway</h2>
          <p>Search from our curated collection of destinations and packages</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className={styles.searchBar}>
          <div className={styles.field}>
            <MapPinIcon />
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel} htmlFor="search-destination">Destination</label>
              <select className={styles.fieldSelect} id="search-destination" defaultValue="">
                <option value="" disabled>Where to?</option>
                {destinationOptions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <CalendarIcon />
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel} htmlFor="search-date">Travel Date</label>
              <input
                className={styles.fieldInput}
                id="search-date"
                type="date"
                placeholder="Pick a date"
              />
            </div>
          </div>

          <div className={styles.field}>
            <UsersIcon />
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel} htmlFor="search-travellers">Travellers</label>
              <input
                className={styles.fieldInput}
                id="search-travellers"
                type="number"
                min="1"
                placeholder="How many?"
              />
            </div>
          </div>

          <div className={styles.field}>
            <CompassIcon />
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel} htmlFor="search-type">Trip Type</label>
              <select className={styles.fieldSelect} id="search-type" defaultValue="">
                <option value="" disabled>Select type</option>
                {tripTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button className={styles.searchBtn} type="button">
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Search
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className={styles.tags}>
          {searchTags.map((tag) => (
            <button
              key={tag.label}
              className={styles.tag}
              style={{ '--tag-accent': tag.accent }}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
