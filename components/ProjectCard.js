import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/css/projectCard.module.css';

const ProjectCard = ({ 
  title = '', 
  description = '', 
  technologies = [], 
  imageUrl = '', 
  projectUrl = '#' 
}) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project
            <svg 
              className={styles.icon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {technologies && technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
