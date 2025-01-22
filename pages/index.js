import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import styles from "@/css/index.module.css";
import projectStyles from "@/css/projects.module.css";
import contactStyles from "@/css/contact.module.css";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import emailjs from 'emailjs-com';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const form = useRef();
  
  // Scroll animations for sections
  const [homeRef, homeInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  // Scroll progress indicator
  const progressBar = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "var(--primary-color)",
    transformOrigin: "0%",
    zIndex: 1001
  };

  // Projects data
  const projects = [
    {
      title: "Examly",
      description:
        "An exam scheduling app that prevents conflicts for professors and students by using machine learning, including genetic algorithms and reinforcement learning.",
      tags: ["React", "Python", "AWS Sagemaker", "AWS S3", "IAM", "TypeScript"],
      image: "/images/examly.png",
      github: "https://github.com/zfjuliana/HTSL-Examly",
    },
    {
      title: "Scriptorium",
      description:
        "An interactive website for multi-language code writing, execution and sharing.",
      tags: ["Next.js", "Prisma", "Docker", "React", "React", "TypeScript", "TailwindCSS"],
      image: "/images/scriptorium.jpg",
      github: "",
    },
    {
      title: "Tayste",
      description:
        "A cross-platform mobile app (iOS/Android) offering tailored dining discounts to students.",
      tags: ["React Native", "Firebase", "Flask", "Python"],
      image: "/images/tayste.png",
    },
    {
      title: "Fraud Fighters",
      description:
        "An add-on to Scotiabank's app that offers users personalized educational modules on fraud prevention, tailored to their transaction history and demographics",
      tags: ["Figma", "Python", "NumPy"],
      image: "/images/FraudFighters.png",
      github: "https://github.com/oliviaw12/FraudFighters",
    },
    {
      title: "Friendify",
      description:
        "A friend-matching app that matches users based on commonalities in their Spotify playlists.",
      tags: ["Java", "Swing", "JSON"],
      image: "/images/Friendify.jpeg",
      github: "https://github.com/not-ryan-ning/Friendify",
    },
    {
      title: "Steam Games Recommender",
      description:
        "A game recommending app that suggests Steam games based on community reviews and user preferences.",
      tags: ["Python", "Tkinter"],
      image: "/images/SteamGames.jpeg",
      github: "https://github.com/oliviaw12/Steam-Games",
    },
  ];

  // Contact form functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending...");

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (result.text === 'OK') {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Olivia Wong</title>
        <meta name="description" content="Olivia Wong's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          ...progressBar,
        }}
      />
      <motion.main
        initial="initial"
        animate="animate"
        className={styles.container}
      >
        {/* Home Section */}
        <Element name="home">
          <motion.section 
            ref={homeRef}
            className={styles.homeSection}
            initial={{ opacity: 0 }}
            animate={homeInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.heroContent}
              variants={staggerChildren}
            >
              {/* Left Side - Profile Image */}
              <motion.div 
                className={styles.profileSection}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className={styles.profileImageWrapper}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={styles.borderCircle}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <img
                    src="/images/profile.jpg"
                    alt="Olivia Wong"
                    className={styles.profileImage}
                  />
                </motion.div>
              </motion.div>

              {/* Right Side - Text Content */}
              <motion.div 
                className={styles.textSection}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div className={styles.titleContainer}>
                  <motion.h2 
                    className={styles.greeting}
                    variants={{
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    Hi, I'm
                  </motion.h2>
                  <motion.h1 
                    className={styles.heroTitle}
                    variants={{
                      initial: { opacity: 0, y: -30 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
                  >
                    Olivia Wong
                  </motion.h1>
                </motion.div>

                {/* Key Highlights */}
                <motion.ul 
                  className={styles.pointsList}
                  variants={staggerChildren}
                >
                  {[' Computer Science Student at U of T',
                    ' Former UI/UX Co-op at Clearco',
                    ' Hackathon Winner'].map((point, index) => (
                    <motion.li 
                      key={index}
                      className={styles.point}
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 }
                      }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 10, color: 'var(--primary-color)' }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div 
                  className={styles.heroCTA}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.primaryButton}
                  >
                    View My Work
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.secondaryButton}
                  >
                    Get in Touch
                  </ScrollLink>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </Element>

        {/* About Section */}
        <Element name="about">
          <motion.section 
            ref={aboutRef}
            className={styles.aboutSection}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={styles.sectionTitle}
              variants={{
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 }
              }}
            >
              About Me
            </motion.h2>

            <motion.div className={styles.aboutContent}>
              {/* Skills Section */}
              <motion.div 
                className={styles.skillsSection}
                variants={staggerChildren}
              >
                <motion.h3 
                  className={styles.subsectionTitle}
                  variants={fadeInUp}
                >
                  Technical Skills
                </motion.h3>
                <motion.div className={styles.skillsGrid}>
                  {[
                    { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML/CSS'] },
                    { category: 'Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Django'] },
                    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Postman'] },
                  ].map((skillGroup, index) => (
                    <motion.div 
                      key={skillGroup.category}
                      className={styles.skillGroup}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4>{skillGroup.category}</h4>
                      <ul>
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.li 
                            key={skill}
                            variants={{
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 }
                            }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Experience Section */}
              <motion.div 
                className={styles.experienceSection}
                variants={staggerChildren}
              >
                <motion.h3 
                  className={styles.subsectionTitle}
                  variants={fadeInUp}
                >
                  Experience
                </motion.h3>
                <motion.div className={styles.timeline}>
                  {[
                    {
                      role: 'UI/UX Co-op',
                      company: 'Clearco',
                      period: 'Sept 2020 - Dec 2020',
                      description: 'Developed user interfaces using Figma. Collaborated with technical team to implement responsive and accessible web components.'
                    },
                    {
                      role: 'Programming Instructor',
                      company: 'Genius Camp',
                      period: 'May 2024 - Aug 2024',
                      description: 'Taught introductory programming courses, provided one-on-one support to students, and graded assignments.'
                    },
                    {
                      role: 'Full Stack Developer',
                      company: 'DMZ Basecamp',
                      period: 'May 2024 - Aug 2024',
                      description: 'Built full-stack application for app and integrated ML models..'
                    }
                  ].map((exp, index) => (
                    <motion.div 
                      key={exp.role}
                      className={styles.timelineItem}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.2 }}
                    >
                      <h4>{exp.role}</h4>
                      <h5>{exp.company}</h5>
                      <p className={styles.period}>{exp.period}</p>
                      <p className={styles.description}>{exp.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <motion.section 
            ref={projectsRef}
            className={projectStyles.projectsSection}
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={projectStyles.sectionTitle}
              variants={fadeInUp}
            >
              Projects
            </motion.h2>
            <motion.div 
              className={projectStyles.projectsGrid}
              variants={staggerChildren}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={projectStyles.projectCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={projectStyles.projectImageContainer}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={projectStyles.projectImage}
                    />
                  </motion.div>
                  <motion.div 
                    className={projectStyles.projectContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                    <p className={projectStyles.projectDescription}>
                      {project.description}
                    </p>
                    <motion.div 
                      className={projectStyles.projectTags}
                      variants={staggerChildren}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tag} 
                          className={projectStyles.tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={projectStyles.githubLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View on GitHub
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <motion.section 
            ref={contactRef}
            className={contactStyles.contactSection}
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={contactStyles.sectionTitle}
              variants={fadeInUp}
            >
              Contact Me
            </motion.h2>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className={contactStyles.contactForm}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className={contactStyles.formGroup}
                variants={fadeIn}
              >
                <label htmlFor="name">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={contactStyles.formInput}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              <motion.div 
                className={contactStyles.formGroup}
                variants={fadeIn}
              >
                <label htmlFor="email">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={contactStyles.formInput}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              <motion.div 
                className={contactStyles.formGroup}
                variants={fadeIn}
              >
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={contactStyles.formTextarea}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={contactStyles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {formStatus && (
                <motion.p 
                  className={`${contactStyles.formStatus} ${
                    formStatus.includes("success") ? contactStyles.success : contactStyles.error
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {formStatus}
                </motion.p>
              )}
            </motion.form>
          </motion.section>
        </Element>
      </motion.main>
      <Footer />
    </>
  );
}
