import React from 'react';
import styles from './styles.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>&copy; 2024 ClaimChain. All rights reserved.</p>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/privacy" className={styles.navLink}>Privacy Policy</a></li>
            <li><a href="/terms" className={styles.navLink}>Terms of Service</a></li>
            <li><a href="/contact" className={styles.navLink}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
