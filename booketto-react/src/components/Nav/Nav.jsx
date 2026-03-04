import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Nav.module.css';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { smoothScrollTo } from '../../utils/smoothScroll';
import Button from '../ui/Button';

const NAV_LINKS = [
  { label: 'Destinations', href: 'destinations' },
  { label: 'Packages', href: 'packages' },
  { label: 'Book Now', href: 'booking' },
  { label: 'Why Us', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export default function Nav({ onLoginClick }) {
  const { scrollDirection, scrollY } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const hidden = scrollDirection === 'down' && scrollY > 100;
  const scrolled = scrollY > 50;

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    setMobileOpen(false);
  }, []);

  const handleGetQuote = useCallback((e) => {
    e.preventDefault();
    smoothScrollTo('booking');
    setMobileOpen(false);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/logo.png" alt="Pan Asia Tours and Travels" className={styles.logoImg} />
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={`#${href}`}
                className={styles.link}
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" onClick={onLoginClick}>
            Login
          </Button>
          <Button variant="primary" size="sm" onClick={handleGetQuote}>
            Get Quote
          </Button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className={styles.mobileLinks}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={`#${href}`}
                    className={styles.mobileLink}
                    onClick={(e) => handleLinkClick(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <Button
                variant="ghost"
                size="md"
                onClick={() => {
                  setMobileOpen(false);
                  onLoginClick?.();
                }}
                className={styles.mobileBtn}
              >
                Login
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleGetQuote}
                className={styles.mobileBtn}
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
