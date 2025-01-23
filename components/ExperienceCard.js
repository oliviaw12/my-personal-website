import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/css/experience.module.css';

const ExperienceCard = ({ role, company, period, description, index }) => {
  return (
    <motion.div 
      className={styles.experienceCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className={styles.cardContent}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={styles.header}>
          <h4 className={styles.role}>{role}</h4>
          <span className={styles.company}>{company}</span>
        </div>
        <div className={styles.period}>{period}</div>
        <p className={styles.description}>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
