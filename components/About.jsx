"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TinkerHubLogo from '@/assets/TinkerHubLogo.svg';
import TinkHackLogo from '@/assets/TinkHackLogoMain.svg';
import BubbleImage from '@/assets/Bubble.svg';
import BackgroundImage from '@/assets/background.svg';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false, // Ensures the animations can trigger multiple times
    });

    setTimeout(() => setIsLoaded(true), 1000); // Delay to simulate loading effect

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Scroll event listener to refresh AOS on scroll
    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS to trigger animations every time the section comes into view
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll); // Add scroll event listener for both directions

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-custom-dark text-white flex items-center justify-center relative p-8 font-satoshi -mt-0 sm: -mt-48 px-10 -mb-20 md:-mt-0 lg:-mt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div
        className={
          isMobile
            ? "relative z-10 flex flex-col items-center gap-8 w-full max-w-6xl px-4"
            : "relative z-10 grid grid-cols-3 grid-rows-2 gap-8 w-full max-w-6xl px-4"
        }
      >
        {/* Title */}
        <div className={isMobile ? "w-full text-center" : "col-span-1"}>
          <h2 className="text-5xl font-bold relative z-10 text-center
            bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
            after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
            after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-10px]
            after:right-0 after:translate-x-0 after:w-[67px]"
            data-aos="zoom-in-up">
            About
          </h2>
        </div>

        {/* Paragraph 1 */}
        <div className={isMobile ? "w-full text-center" : "col-span-2"} data-aos="fade-left">
          <p className="text-md -m-8 mt-4 font-semibold text-start sm:text-lg md:text-xl lg:leading-relaxed lg:text-2xl">
            TinkerHub MEC's overnight Hackathon, Kerala's inaugural AI-based event, promotes student expertise and explores Generative AI. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.
          </p>
        </div>

        {/* TinkHack Logo */}
        {!isMobile && (
          <div className="col-span-1 flex items-center justify-center transform -rotate-6 " data-aos="fade-up">
            <Image
              src={TinkHackLogo}
              alt="TinkHack Logo"
              width={300}
              height={300}
            />
          </div>
        )}

        {/* Paragraph 2 */}
        <div className={isMobile ? "w-full text-center" : "col-span-2"} data-aos="fade-left">
          <p className="text-md -m-8 mt-4 font-semibold text-start sm:text-lg md:text-xl lg:leading-relaxed lg:text-2xl">
            TinkerHub MEC Chapter is a branch of a non-profit organization that has the aim to learn, interact, and innovate. We provide students with opportunities to enhance their skills through hands-on experience and community learning culture.
          </p>
        </div>
      </div>

      {/* Bubble Image */}
      {!isMobile && (
        <div className="absolute z-10 w-[150px] h-[300px] -bottom-[120px] -left-1 " data-aos="fade-up">
          <Image
            className={`brightness-125 transition-transform duration-1000 sm:h-[200px] sm:ml-70 md:h-[250px] md:ml-90  lg:h-[350px] ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'}`} 
            src={BubbleImage} 
            alt="Bubble Image"
          />
        </div>
      )}

      {/* TinkerHub Logo */}
      {!isMobile && (
        <div className="absolute -bottom-4 right-24 transform -rotate-6 hidden sm:block" data-aos="zoom-in">
          <Image
            src={TinkerHubLogo}
            alt="TinkerHub Logo"
            width={250}
            height={250}
          />
        </div>
      )}

    </section>
  );
};

export default About;
