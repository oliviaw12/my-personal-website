import React, { useState } from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import styles from "@/css/about.module.css"; // Import the module CSS
import { useTheme } from "../context/ThemeContext";

export default function AboutMe() {
  const { theme } = useTheme();

 
  const skills = [
    "Python", "Java", "C", "JavaScript", "React",
    "Node.js", "SQL", "Git", "HTML", "CSS",
    "R", "Assembly", "TypeScript",
  ];

  const experience = [
    { title: "UI/UX Co-op Student", company: "Clearco", date: "Sept 2020 - Nov 2020" },
    { title: "Programming Instructor", company: "Genius Camp", date: "May 2024 - Aug 2024" },
    { title: "Robotics & Programming Instructor", company: "Caution Tape Robotics", date: "Aug 2024 - Nov 2024" },
    { title: "Co-Founder / Full-Stack Developer", company: "DMZ Basecamp Incubation Program", date: "May 2024 - Present" },
  ];

  return (
    <>
      <Navbar />
      <div className={`${styles.container} ${theme === "synthwave" ? styles.synthwave : styles.light}`}>
      
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mt-16 mb-8 text-center">About Me</h1>
            
          <div className={styles.description}>
            I am a motivated third-year Computer Science student at the University of Toronto, with a minor in Mathematics. I'm passionate about AI, software and web development, as well as UI/UX design.
  
            When I'm not coding, I enjoy exploring new places, reading, and drawing.

          </div>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="relative flex gap-8 overflow-x-auto px-4 py-6">
              <div className="absolute top-8 left-0 w-full h-1 bg-gray-300"></div>
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col items-center min-w-[200px]">
                  <div className={styles.timelineCircle}></div>
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                    <p className={styles.timelineCompany}>{exp.company}</p>
                    <p className={styles.date}>{exp.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        </div>

      <Footer />
    </>
  );
}
