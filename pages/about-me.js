import React from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

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
      title: "UI/UX Co-op Student",
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

          <div className="home-description text-base lg:text-lg mb-9">
            I am a driven third-year student at the University of Toronto, specializing in Computer Science with a minor in Mathematics.
            <br />
            <br />
            I'm very interested in Artificial Intelligence, software and web development as well as UI/UX design.
            <br />
            <br />
            When I'm not coding, I enjoy exploring new places, reading, and practicing photography.
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary text-white font-semibold px-4 py-2 rounded-full shadow-md text-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="relative">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>

            <div className="relative flex items-start gap-8 overflow-x-auto px-4 py-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 w-full h-1 bg-gray-300"></div>

              {/* Timeline Entries */}
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center min-w-[200px]"
                >
                  {/* Circle Bullet */}
                  <div className="relative z-10 w-6 h-6 bg-primary rounded-full border-4 border-white mb-4"></div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.date}</p>
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
