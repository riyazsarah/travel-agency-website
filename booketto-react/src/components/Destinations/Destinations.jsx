import { useState } from 'react';
import styles from './Destinations.module.css';
import { destinations } from '../../data/destinations';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import DestinationCard from './DestinationCard';
import { cn } from '../../utils/cn';

const COLLAPSED_COUNT = 8;

export default function Destinations() {
  const [collapsed, setCollapsed] = useState(false);
  const visible = collapsed ? destinations.slice(0, COLLAPSED_COUNT) : destinations;

  return (
    <section className={styles.section} id="destinations">
      <ScrollReveal>
        <div className={styles.headerRow}>
          <SectionHeader
            label="Where to Go"
            title="All Destinations"
            subtitle="Handpicked destinations across the Middle East, Asia & beyond"
          />
          <a className={styles.bookLink} href="#search">
            Book Any Destination &rarr;
          </a>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {visible.map((dest, index) => (
          <ScrollReveal
            key={dest.id}
            delay={index * 0.03}
            className={cn(!collapsed && dest.featured && styles.spanTwo)}
            style={{ height: '100%' }}
          >
            <DestinationCard destination={dest} index={index} />
          </ScrollReveal>
        ))}
      </div>

      <div className={styles.toggleRow}>
        <button
          className={styles.toggleBtn}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? `View All ${destinations.length} Destinations` : 'Show Less'}
        </button>
      </div>
    </section>
  );
}
