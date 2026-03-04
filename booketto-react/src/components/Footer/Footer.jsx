import styles from './Footer.module.css';
import { company, footerColumns } from '../../data/company';
import Badge from '../ui/Badge';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        {/* Brand column */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <img src="/logo.png" alt="Booketto" className={styles.logoImg} />
          </a>
          <p className={styles.brandDesc}>{company.description}</p>
          <div className={styles.socials}>
            <a href={company.social.twitter} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              X
            </a>
            <a href={company.social.whatsapp} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href={company.social.tripadvisor} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <circle cx="8.5" cy="14.5" r="1.5" />
                <circle cx="15.5" cy="14.5" r="1.5" />
                <path d="M12 2C6.48 2 2 6 2 11c0 2.8 1.4 5.3 3.6 7L12 22l6.4-4C20.6 16.3 22 13.8 22 11c0-5-4.48-9-10-9zm-3.5 16a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
              </svg>
            </a>
            <a href={company.social.instagram} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={company.social.facebook} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title} className={styles.column}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            {col.links ? (
              <ul className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : col.offices ? (
              <div className={styles.offices}>
                {col.offices.map((office) => (
                  <div key={office.name} className={styles.office}>
                    <span className={styles.officeName}>{office.name}</span>
                    {office.lines.map((line) => (
                      line.href ? (
                        <a key={line.text} href={line.href} className={styles.colLink}>{line.text}</a>
                      ) : (
                        <span key={line.text} className={styles.officeLine}>{line.text}</span>
                      )
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <span className={styles.copy}>&copy;2021&ndash;{new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
        <div className={styles.bottomRight}>
          {company.badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      </div>
    </footer>
  );
}
