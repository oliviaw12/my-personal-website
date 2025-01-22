import React from "react";
import styles from '../css/footer.module.css';
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/oliviaw12",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olivia-wongg",
      icon: "fab fa-linkedin"
    }
  ];

  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <motion.a
            href="mailto:o.wong@mail.utoronto.ca"
            className={styles.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            o.wong@mail.utoronto.ca
          </motion.a>
        </div>

        <motion.div 
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.copyright}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        &copy; {currentYear} Olivia Wong. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
