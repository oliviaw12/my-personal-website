import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "@/css/nav.module.css";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/oliviaw12",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olivia-wongg",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:o.wong@mail.utoronto.ca",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="M22 6l-10 7L2 6"></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progress = (currentProgress / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollProps = {
    spy: true,
    smooth: true,
    duration: 500,
  };

  return (
    <div className={styles.navContainer}>
      {/* <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} /> */}
      <div className="flex justify-between items-center w-full">
        <div className="text-xl font-bold">
          <ScrollLink
            to="home"
            {...scrollProps}
          >
            olivia wong
          </ScrollLink>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex space-x-11">
            <ScrollLink
              to="home"
              {...scrollProps}
              className="text-md custom-hover font-semibold cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              {...scrollProps}
              className="text-md custom-hover font-semibold cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              {...scrollProps}
              className="text-md custom-hover font-semibold cursor-pointer"
            >
              Projects
            </ScrollLink>
            {/* <ScrollLink
              to="contact"
              {...scrollProps}
              className="text-md custom-hover font-semibold cursor-pointer"
            >
              Contact
            </ScrollLink> */}
          </div>
        </div>

        <div className={styles.socialIcons}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}