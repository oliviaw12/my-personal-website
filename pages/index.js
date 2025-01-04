import React from "react";
import Image from "next/image";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

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
            className="rounded-full  border-primary object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="home-text text-center lg:text-left ml-9">
          <div className="home-intro-en text-7xl font-semibold mb-6">
            Hi, I'm Olivia Wong
          </div>

          <div className="home-text-sub text-2xl mb-6">
            CS Student @ UofT | Software Developer | UI/UX Designer
          </div>

          {/* Social Icons Section */}
          <div className="social-icons flex justify-center lg:justify-start space-x-8 mt-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/oliviaw12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition duration-100"
            >
              <i className="fab fa-github"></i>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/olivia-wongg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition duration-100"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:o.wong@mail.utoronto.ca"
              className="text-3xl hover:text-primary transition duration-100"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
