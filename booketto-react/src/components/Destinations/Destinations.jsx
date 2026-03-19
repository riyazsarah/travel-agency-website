import { useState } from 'react';
import styles from './Destinations.module.css';
import { destinations } from '../../data/destinations';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import DestinationCard from './DestinationCard';
import { cn } from '../../utils/cn';

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'domestic', label: 'Domestic India' },
  { key: 'international', label: 'International' },
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? destinations
    : destinations.filter((d) => d.region === activeTab);

  return (
    <section className={styles.section} id="destinations">
      <ScrollReveal>
        <div className={styles.headerRow}>
          <SectionHeader
            label="Where to Go"
            title="All Destinations"
            subtitle="Handpicked domestic & international destinations for every traveller"
          />
          <a className={styles.bookLink} href="#search">
            Book Any Destination &rarr;
          </a>
        </div>
      </ScrollReveal>

      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={cn(styles.tab, activeTab === tab.key && styles.tabActive)}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((dest, index) => (
          <ScrollReveal
            key={dest.id}
            delay={index * 0.03}
            className={cn(dest.featured && styles.spanTwo)}
            style={{ height: '100%' }}
          >
            <DestinationCard destination={dest} index={index} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
