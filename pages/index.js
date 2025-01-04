import React from "react";
import Image from "next/image";
import Navbar from "@/components/navBar";

import Footer from "@/components/footer"


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-100 flex flex-col lg:flex-row items-center justify-center px-4">
        {/* Left Section: Circular Image */}
        <div className="home-image ml-8 mb-6 lg:mb-0 lg:mr-12">
          <Image 
            src="/images/profile.jpg" 
            alt="Olivia Wong"
            width={300}
            height={300}
            className="rounded-full border-4 border-primary object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="home-text text-center lg:text-left">
          <div className="home-intro-en text-7xl font-semibold mb-6">
            Hi, I'm Olivia Wong
          </div>

          <div className="home-text-sub text-2xl mb-6">
            CS Student @ UofT | Software Developer | UI/UX Designer
          </div>

          <div className="home-description text-base lg:text-lg">
            I'm a Computer Science student with a passion for coding and web development. Currently, I'm learning new technologies and frameworks to build impactful and innovative web applications.
            <br />
            When I'm not coding, I enjoy exploring new places, reading, and practicing photography.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
