import React from "react";
import styles from '../css/projects.module.css';
import Navbar from "@/components/navBar";
import Footer from "@/components/footer"
import { motion } from "framer-motion";

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
            "An add-on to Scotiabank’s app that offers users personalized educational modules on fraud prevention, tailored to their transaction history and demographics",
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

export default function Projects() {
    return (
        <>
            <Navbar />
            <section className={styles.projectsSection}>
                <h1 className="text-4xl font-bold mt-16 mb-8 text-center">Projects </h1>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
