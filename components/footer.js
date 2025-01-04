import React from "react";
import styles from '../css/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      {/* Divider */}
      <div className={styles['footer-div2']}>
        <hr className={styles['footer-line']} />
      </div>

      {/* Footer Info Section */}
      <div className={styles['footer-div3']}>
        <span className={styles['footer-marker']}>2025 Olivia Wong</span>
        <div className={styles['footer-icons']}>
          <a
            href="https://github.com/oliviaw12"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-icon']}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olivia-wongg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['footer-icon']}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Contact Section (Below Divider) */}
      <div className={styles['footer-div1']}>
        <div className={styles['footer-contact']}>
          
          <a
            href="mailto:o.wong@mail.utoronto.ca"
            className={styles['footer-email']}
          >
            o.wong@mail.utoronto.ca
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
