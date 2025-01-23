import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import styles from "@/css/index.module.css";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import emailjs from '@emailjs/browser';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import ProfileImage from '@/components/ProfileImage';

export default function Home() {
  const router = useRouter();
  const form = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animations for sections
  const [homeRef, homeInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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
      github: "https://github.com/oliviaw12/Steam-Games-Recommender",
    },
  ];

  // // Contact form functions
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_wae1871",
        "template_chs5677",
        form.current,
        "HMbBJHhU_3dLNOVyX"
      );

      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setShowError(true);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  // Generate orbiting dots
  const generateDots = (count) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      const angle = (i * 360) / count;
      const radius = Math.random() * 20 + 140; // Random radius between 140-160
      const delay = Math.random() * 5; // Random delay for animation
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      dots.push({ x, y, delay });
    }
    return dots;
  };

  const dots = generateDots(12);

  const renderHomeSection = () => (
    <Element name="home" className={styles.homeSection}>
      <div className={styles.backgroundPattern} />
      <motion.div
        ref={homeRef}
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={homeInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.profileSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={homeInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProfileImage
            src="/images/profile.jpg"
            alt="Olivia Wong"
          />
        </motion.div>

        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, x: 30 }}
          animate={homeInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={homeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={homeInView ? {
              opacity: 1,
              y: 0,
              visibility: 'visible',
              transition: {
                duration: 0.5,
                delay: 0.7
              }
            } : { visibility: 'hidden' }}
          >
            Olivia Wong
          </motion.h1>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            animate={homeInView ? {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.8
              }
            } : {}}
          >
            UX Designer & Full Stack Developer
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={homeInView ? {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.9
              }
            } : {}}
          >
            I design and develop beautiful, responsive, and user-friendly web experiences. Combining my passion for design and development, I seamlessly blend aesthetics with functionality.
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={homeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ScrollLink to="projects" smooth={true} duration={500}>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <motion.svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ x: 0, rotate: 0 }}
                  whileHover={{ x: 5, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </motion.button>
            </ScrollLink>

            <ScrollLink to="contact" smooth={true} duration={500}>
              <motion.button
                className={styles.secondaryButton}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
                <motion.svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ x: 0, rotate: 0 }}
                  whileHover={{ x: 5, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </motion.svg>
              </motion.button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </Element>
  );

  return (
    <>
      <Head>
        <title>Olivia Wong</title>
        <meta name="description" content="Olivia Wong's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <motion.main
        initial="initial"
        animate="animate"
        className={styles.container}
      >
        {/* Home Section */}
        {renderHomeSection()}

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
              <Element name="skills">
                <motion.section
                  ref={skillsRef}
                  className={`${styles.section} ${styles.skillsSection}`}
                  initial={{ opacity: 0 }}
                  animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
        
                  <motion.div
                    className={styles.skillsContent}
                    variants={staggerChildren}
                  >
                    <div className={styles.skillsWrapper}>
                      {/* Technical Skills */}
                      <motion.div className={styles.technicalSkills}>
                        <motion.h3
                          className={styles.subsectionTitle}
                          variants={fadeInUp}
                        >
                          Technical Skills
                        </motion.h3>
                        <motion.div 
                          className={styles.skillsGrid}
                          variants={staggerChildren}
                        >
                          {[
                            {
                              category: "Frontend Development",
                              items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript"],
                              icon: "🎨"
                            },
                            {
                              category: "Backend Development",
                              items: ["Node.js", "Python", "PostgreSQL", "Flask"],
                              icon: "⚙️"
                            },
                            {
                              category: "Machine Learning",
                              items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas"],
                              icon: "🤖"
                            },
                            {
                              category: "Tools & Others",
                              items: ["Git", "Docker", "AWS","Linux", "Figma"],
                              icon: "🛠️"
                            }
                          ].map((skillGroup, index) => (
                            <motion.div
                              key={skillGroup.category}
                              className={styles.skillGroup}
                              variants={fadeInUp}
                              whileHover={{ scale: 1.02 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 300,
                                delay: index * 0.1 
                              }}
                            >
                              <div className={styles.skillGroupHeader}>
                                <span className={styles.skillIcon}>{skillGroup.icon}</span>
                                <h4>{skillGroup.category}</h4>
                              </div>
                              <ul>
                                {skillGroup.items.map((skill, skillIndex) => (
                                  <motion.li
                                    key={skill}
                                    variants={{
                                      initial: { opacity: 0, x: -20 },
                                      animate: { opacity: 1, x: 0 }
                                    }}
                                    whileHover={{ x: 5 }}
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

                      {/* Experience */}
                      <motion.div className={styles.experience}>
                        <motion.h3
                          className={styles.subsectionTitle}
                          variants={fadeInUp}
                        >
                          Experience
                        </motion.h3>
                        <motion.div 
                          className={styles.experienceGrid}
                          variants={staggerChildren}
                        >
                          {[
                            {
                              role: 'Programming Instructor',
                              company: 'Genius Camp',
                              period: 'May 2024 - Aug 2024',
                              description: 'Led introductory programming courses for 25+ students. Created interactive curriculum covering Python, web development, and algorithmic thinking.'
                            },
                            {
                              role: 'Co-Founder / Full-Stack Developer',
                              company: 'DMZ Incubation Program',
                              period: 'May 2024 - Aug 2024',
                              description: 'Developed a cross-platform mobile app (iOS/Android) using React Native. Had product presented at the 2024 Collision Conference, refining features based on live user feedback.'
                            },
                          
                            {
                              role: 'UI/UX Co-op',
                              company: 'Clearco',
                              period: 'Sept 2020 - Dec 2020',
                              description: 'Developed user interfaces using Figma. Collaborated with technical team to implement responsive and accessible web components.'
                            }
                          ].map((exp, index) => (
                            <ExperienceCard
                              key={exp.role}
                              role={exp.role}
                              company={exp.company}
                              period={exp.period}
                              description={exp.description}
                              index={index}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.section>
              </Element>
            </motion.div>
          </motion.section>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <motion.section
            ref={projectsRef}
            className={`${styles.section} ${styles.projectsSection}`}
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
             <motion.h3
                          className={styles.subsectionTitle}
                          variants={fadeInUp}
                        >
                          Projects
                        </motion.h3>
            <motion.div
              className={styles.projectsGrid}
              variants={staggerChildren}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.tags}
                  imageUrl={project.image}
                  projectUrl={project.github || undefined}
                />
              ))}
            </motion.div>
          </motion.section>
        </Element>

        {/* Contact Section
        <Element name="contact">
          <motion.section
            ref={contactRef}
            className={`${styles.section} ${styles.contactSection}`}
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className={styles.contactWrapper}>
              <motion.div className={styles.contactContent}>
                <motion.h2
                  className={styles.sectionTitle}
                  variants={fadeInUp}
                >
                  Contact Me
                </motion.h2>
                <motion.p 
                  className={styles.contactDescription}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  Have a question or want to work together? Feel free to reach out!
                </motion.p>
              </motion.div>

              <motion.form
                ref={form}
                onSubmit={handleSubmit}
                className={styles.contactForm}
                variants={fadeInUp}
              >
                <motion.div
                  className={styles.formGroup}
                  variants={fadeIn}
                >
                  <label htmlFor="name">
                    <motion.span 
                      className={styles.labelText}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Name
                    </motion.span>
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  variants={fadeIn}
                >
                  <label htmlFor="email">
                    <motion.span 
                      className={styles.labelText}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Email
                    </motion.span>
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  variants={fadeIn}
                >
                  <label htmlFor="message">
                    <motion.span 
                      className={styles.labelText}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Message
                    </motion.span>
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    required
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.div className={styles.formActions}>
                  <motion.button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {isSubmitting ? (
                      <span className={styles.spinner}>Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <motion.svg
                          className={styles.icon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </motion.svg>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {showSuccess && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {showError && (
                  <motion.div 
                    className={styles.errorMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </motion.section>
        </Element> */}
      </motion.main>
      <Footer />
    </>
  );
}
