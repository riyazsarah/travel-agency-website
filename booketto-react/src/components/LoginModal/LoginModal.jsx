import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import styles from './LoginModal.module.css';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className={styles.close} onClick={onClose} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2 className={styles.title}>Welcome Back</h2>

            {/* Tab switcher */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'login' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'register' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {/* Login form */}
            {activeTab === 'login' && (
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input className={styles.input} type="email" placeholder="you@email.com" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Password</label>
                  <input className={styles.input} type="password" placeholder="Your password" required />
                </div>
                <button type="submit" className={styles.submit}>Sign In</button>
              </form>
            )}

            {/* Register form */}
            {activeTab === 'register' && (
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input className={styles.input} type="text" placeholder="Your name" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input className={styles.input} type="email" placeholder="you@email.com" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Password</label>
                  <input className={styles.input} type="password" placeholder="Create a password" required />
                </div>
                <button type="submit" className={styles.submit}>Create Account</button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
