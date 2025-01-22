import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "@/css/nav.module.css";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
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
            <ScrollLink
              to="contact"
              {...scrollProps}
              className="text-md custom-hover font-semibold cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/oliviaw12" target="_blank" rel="noopener noreferrer" className="text-2xl ml-5" >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/olivia-wongg" target="_blank" rel="noopener noreferrer" className="text-2xl ml-5">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:o.wong@mail.utoronto.ca" className="text-2xl ml-5 mr-6">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}