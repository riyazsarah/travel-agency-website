import { useState } from 'react';
import styles from './Booking.module.css';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { motion } from 'motion/react';

const destinationOptions = [
  'Dubai', 'Abu Dhabi', 'Malaysia', 'Singapore', 'Thailand',
  'Oman', 'India', 'Vietnam', 'Turkey', 'Indonesia', 'Baku', 'Saudi Arabia',
];

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#10B981',
    label: 'WhatsApp',
    value: '+91 77700 60200',
    href: 'https://wa.me/917770060200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: '#D4A828',
    label: 'Email Us',
    value: 'info@booketto.in',
    href: 'mailto:info@booketto.in',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#D4A828',
    label: 'Dubai Office',
    value: '+971 54 746 0786',
    href: 'tel:+971547460786',
  },
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="booking">
      <div className={styles.grid}>
        {/* Left column */}
        <ScrollReveal direction="left">
          <div className={styles.info}>
            <SectionHeader label="Book Your Trip" />
            <h2 className={styles.heading}>Plan Your Dream Trip with Booketto</h2>
            <p className={styles.desc}>
              Share your travel wishlist and our experts will craft a personalised
              itinerary with the best deals. Free consultation, no hidden charges.
            </p>

            <div className={styles.contacts}>
              {contacts.map((c) => (
                <a key={c.label} href={c.href} className={styles.chip} target="_blank" rel="noopener noreferrer">
                  <span className={styles.chipIcon} style={{ background: `${c.color}20`, color: c.color }}>
                    {c.icon}
                  </span>
                  <span className={styles.chipText}>
                    <span className={styles.chipLabel}>{c.label}</span>
                    <span className={styles.chipValue}>{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right column - form */}
        <ScrollReveal direction="right" delay={0.15}>
          <div className={styles.card}>
            {!submitted ? (
              <>
                <h3 className={styles.cardTitle}>Quick Enquiry</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="booking-name">Full Name</label>
                      <input className={styles.input} id="booking-name" type="text" placeholder="Your name" required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="booking-email">Email</label>
                      <input className={styles.input} id="booking-email" type="email" placeholder="you@email.com" required />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="booking-date">Travel Date</label>
                      <input className={styles.input} id="booking-date" type="date" required />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="booking-travellers">Travellers</label>
                      <input className={styles.input} id="booking-travellers" type="number" min="1" placeholder="How many?" required />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="booking-destination">Destination</label>
                    <select className={styles.input} id="booking-destination" defaultValue="" required>
                      <option value="" disabled>Select destination</option>
                      {destinationOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="booking-requests">Special Requests</label>
                    <textarea className={styles.textarea} id="booking-requests" placeholder="Any special requirements..." rows="3" />
                  </div>

                  <button type="submit" className={styles.submit}>
                    Send Booking Request &rarr;
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                className={styles.success}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="56" height="56">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className={styles.successTitle}>Thank you!</h3>
                <p className={styles.successText}>We'll get back to you within 24 hours.</p>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
