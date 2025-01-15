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

import React from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useRouter } from "next/router"; 
import styles from "@/css/index.module.css"; 
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleMessageMeClick = () => {
    router.push("/contact-me"); 
  };

  return (
    <>
      <Navbar />
      <main
        className={`${styles.homeText} ${styles[theme === "synthwave" ? "synthwave" : "light"]} min-h-screen bg-base-100 flex flex-col items-center justify-center px-4 text-center`}
      >
        {/* Introduction Section */}
        <div className="text-center max-w-3xl">
          <h1 className="text-8xl font-bold leading-tight mb-6">
            Olivia Wong
          </h1>
          <p className="text-2xl font-medium mb-4">
           
          </p>
          
          {/* Accomplishments */}
          <ul className="text-lg font-light mb-8 space-y-4">
          
            <li>🎓 Computer Science Student at the University of Toronto</li>
            <li>💼 Former UI/UX Co-op at Clearco</li>
            <li>🏆 Hackathon Winner</li>
          </ul>

          {/* Message Me Button */}
          <div className="button-container mt-8">
            <button
              onClick={handleMessageMeClick}
              className={`${styles.customBtn} px-6 py-3 rounded-full text-lg font-bold shadow-lg`}
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
            >
              Message Me
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

