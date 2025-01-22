import React, { useRef } from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import styles from "@/css/contact.module.css";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      form.current.reset();
    }, (error) => {
      console.log('Failed to send email:', error.text);
    });
  };

  return (
    <>
      <Navbar />
      <section className={styles.contactContainer}>
        <motion.div
          className={styles.contactContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactDescription}>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className={styles.formTextarea}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          <div className={styles.contactLinks}>
            <a href="https://github.com/oliviaw12" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/olivia-wongg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:o.wong@mail.utoronto.ca">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
