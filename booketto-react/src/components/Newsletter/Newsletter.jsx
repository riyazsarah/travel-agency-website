import styles from './Newsletter.module.css';
import ScrollReveal from '../ui/ScrollReveal';

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <h2 className={styles.heading}>Never Miss a Deal</h2>
        <p className={styles.desc}>
          Subscribe to get exclusive travel offers, new destination alerts, and insider tips.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>Email address</label>
          <input
            className={styles.input}
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className={styles.btn}>
            Subscribe
          </button>
        </form>
      </ScrollReveal>
    </section>
  );
}
