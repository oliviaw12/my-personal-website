import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/css/profileImage.module.css';

const ProfileImage = ({ src, alt }) => {
  // Generate orbiting elements
  const orbitingElements = Array.from({ length: 3 }, (_, i) => ({
    size: 20 + i * 10,
    delay: i * 2,
    duration: 8 + i * 2,
    radius: 140 + i * 30
  }));

  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageContainer}>
        {/* Aura layers */}
        <div className={styles.auraOuter} />
        <div className={styles.auraMid} />
        <div className={styles.auraInner} />
        
        {/* Orbiting auras */}
        <div className={styles.orbitContainer}>
          {orbitingElements.map((element, index) => (
            <motion.div
              key={index}
              className={styles.orbitingAura}
              style={{
                width: element.size,
                height: element.size,
                animationDelay: `${-element.delay}s`,
                animationDuration: `${element.duration}s`,
                background: `radial-gradient(circle at center, 
                  rgba(var(--primary-rgb), 0.3) 0%,
                  rgba(var(--primary-rgb), 0) 70%)`,
                left: `calc(50% - ${element.size / 2}px)`,
                top: `calc(50% - ${element.size / 2}px)`,
                transform: `translateX(${element.radius}px)`
              }}
            />
          ))}
        </div>
        
        {/* Profile image */}
        <motion.img
          src={src}
          alt={alt}
          className={styles.image}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
