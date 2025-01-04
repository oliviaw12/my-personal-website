import React from "react";
import Navbar from "@/components/navBar";

export default function AboutMe() {
  const skills = [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "HTML",
    "CSS",
    "R",
    "Assembly",
    "TypeScript",
  ];

  const experience = [
    {
      title: "Co-Founder / Full-Stack Developer",
      company: "DMZ Basecamp Incubation Program",
      date: "May 2024 - Present",
    },
    {
      title: "Robotics & Programming Instructor",
      company: "Caution Tape Robotics",
      date: "Aug 2024 - Nov 2024",
    },
    {
      title: "Programming Instructor",
      company: "Genius Camp",
      date: "May 2024 - Aug 2024",
    },
    {
      title: "UI/UX Intern",
      company: "Clearco",
      date: "Sept 2020 - Nov 2020",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-100 text-gray-800 px-8 py-12 transition duration-200 ease-in-out">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mt-16 mb-8 text-center">About Me</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary text-white px-4 py-2 rounded-full shadow-md text-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="relative">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>

            <div className="relative">
              {/* Vertical Line (Continuous) */}
              <div className="absolute top-0 left-8 w-1 h-full bg-primary"></div>

              {/* Timeline Entries */}
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-center mb-8"
                >
                  {/* Circle Bullet */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full"></div>
                  {/* Content */}
                  <div className="ml-12">
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <p className="text-md text-gray-600">{exp.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
