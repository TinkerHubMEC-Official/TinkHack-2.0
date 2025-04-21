"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TinkerHubLogo from '@/assets/TinkerHubLogo.svg';
import TinkHackLogo from '@/assets/TinkHackLogoMain.svg';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000); 

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-custom-dark z-0 text-white flex items-center justify-center relative p-8 bg-pattern font-satoshi -mt-40 sm:-mt-48 px-10 -mb-20 md:-mt-0 lg:-mt-0"
    >
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <div
        className={
          isMobile
            ? "relative z-10 flex flex-col items-center gap-8 w-full max-w-6xl px-4"
            : "relative z-10 grid grid-cols-3 grid-rows-2 gap-8 w-full max-w-6xl px-4"
        }
      >
        <div className={isMobile ? "w-full text-center" : "col-span-1"}>
          <h2
            className="text-5xl font-bold relative z-10 text-center
            bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
            after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
            after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-10px]
            after:right-0 after:translate-x-0 after:w-[67px]"
            data-aos="zoom-in-up"
          >
            About
          </h2>
        </div>

        <div className={isMobile ? "w-full text-center" : "col-span-2"} data-aos="fade-left">
          <p className="text-md -m-8 mt-4 font-semibold text-start sm:text-lg md:text-xl lg:leading-relaxed lg:text-2xl">
            TinkerHub MEC's overnight Hackathon, Kerala's inaugural AI-based event, promotes student expertise and explores Generative AI. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.
          </p>
        </div>

        {!isMobile && (
          <div
            className="col-span-1 flex items-center justify-center transform -rotate-6"
            data-aos="fade-up"
          >
            <Image
              src={TinkHackLogo}
              alt="TinkHack Logo"
              width={300}
              height={300}
            />
          </div>
        )}

        <div className={isMobile ? "w-full text-center" : "col-span-2"} data-aos="fade-left">
          <p className="text-md -m-8 mt-4 font-semibold text-start sm:text-lg md:text-xl lg:leading-relaxed lg:text-xl">
          Tinkerhub MEC, the Model Engineering College chapter of Tinkerhub, is a dynamic community fostering innovation and tech upskilling. The chapter hosts interactive sessions, hackathons, and workshops like Tinktank, GetSetWeb, and TinkHerHack to equip students with hands-on skills and industry insights. With our initiatives, we champion inclusivity and collaborative learning, inspiring students to explore and elevate their careers.          
          </p>
        </div>
      </div>


      {!isMobile && (
        <div
          className="absolute -bottom-4 right-24 transform -rotate-6 hidden sm:block"
          data-aos="zoom-in"
        >
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
