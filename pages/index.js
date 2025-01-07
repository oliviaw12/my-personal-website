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
      <main className="min-h-screen bg-base-100 flex flex-col lg:flex-row items-center justify-center px-4" >
        {/* Left Section: Circular Image */}
        <div className="home-image ml-8 mb-6 lg:mb-0 lg:mr-24 relative">
          <div className="absolute w-[350px] h-[350px] border-4 rounded-full" style={{ width: '350px', height: '350px', top: '-15px', left: '-15px' }}></div>
          <Image 
            src="/images/profile.jpg" 
            alt="Olivia Wong"
            width={320}
            height={320}
            className="rounded-full object-cover shadow-lg relative z-10" 
            style={{ width: '320px', height: '320px', borderRadius: '50%' }}
          />
        </div>

        {/* Right Section: Text */}
        <div className="home-text text-center lg:text-left px-6">
          <p className="text-3xl font-medium mb-2">Hi, my name is</p>
          <h1 className="text-8xl font-bold leading-tight mb-6">
            Olivia Wong
          </h1>

          <div className="home-text-sub text-2xl mb-8">
            UI/UX Designer | Software Engineer | Web Developer 
          </div>

           {/* Message Me Button */}
           <div className="button-container mt-8">
            <button 
              onClick={handleMessageMeClick} 
              className="message-me-btn px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-primary-dark transition-all duration-100"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
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
