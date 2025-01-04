import React from "react";
import styles from '../css/projects.module.css';
import Navbar from "@/components/navBar";
import Footer from "@/components/footer"

const projects = [
    {
        title: "Examly",
        description:
            "An interactive website that showcases my skills and projects in a visually appealing manner.",
        tags: ["React", "Python", "AWS"],
        image: "/images/examly.png",
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
    },
    {
        title: "Friendify",
        description:
            "A friend-matching app that matches users based on commonalities in their Spotify playlists.",
        tags: ["Java", "Swing", "JSON"],
        image: "/images/friendify.jpeg",
    },
    {
        title: "Games Recommender",
        description:
            "A game recommending app that suggests Steam games based on community reviews and user preferences.",
        tags: ["Python", "Tkinter"],
        image: "/images/SteamGames.jpeg",
    },
];

function Projects() {
    return (
        <>
            <Navbar />
            <div className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
