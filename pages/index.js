import React from "react";
import Image from "next/image";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import { useRouter } from "next/router"; 

export default function Home() {
  const router = useRouter();

  const handleMessageMeClick = () => {
    router.push("/contact-me"); 
  };

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
          <h1 className="home-intro-en text-7xl font-semibold mb-6">
            Hi, I'm Olivia Wong
          </h1>

          <div className="home-text-sub text-2xl mb-6">
            CS Student @ UofT | Software Developer | UI/UX Designer
          </div>

           {/* Message Me Button */}
           <div className="button-container mt-6">
            <button 
              onClick={handleMessageMeClick} 
              className="message-me-btn text-white px-6 py-3 rounded-full text-xl font-medium shadow-xl hover:bg-primary-dark transition duration-200" 
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
