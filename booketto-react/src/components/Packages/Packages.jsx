import styles from './Packages.module.css';
import SectionHeader from '../ui/SectionHeader';
import PackageCard from './PackageCard';
import { packages } from '../../data/packages';

export default function Packages() {
  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        <SectionHeader
          label="Featured Packages"
          title="Handpicked Itineraries"
          subtitle="Ready-to-go packages designed by our travel experts — just pick, pack, and fly."
        />
        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
