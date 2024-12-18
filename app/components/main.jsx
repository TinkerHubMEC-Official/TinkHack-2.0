"use client";
import { useEffect } from 'react';
import Image from 'next/image';

import Navbar from './navbar.jsx';

const MainContent = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Navbar className="absolute top-0 left-0 w-full z-50" />

      <section id="hero" className="h-screen bg-custom-dark relative flex items-center justify-center">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        
        <div className="container relative flex">
          {/* New Image for the Upper-Left Corner */}
          <img 
            className="brightness-125 absolute top-0 left-0 z-10 w-[400px] h-[150px]" 
            src="/images/landing_page_1.svg" 
            alt="Landing Page Corner Image"
          />
          {/* New Image for the Upper-Right Corner */}
          <img 
            className="brightness-125 absolute top-0 right-0 z-10 w-[450px] h-[380px]" 
            src="/images/landing_page_2.svg" 
            alt="Landing Page Corner Image"
          />
          {/* New Image for the Lower-Right Corner */}
          <img 
            className="brightness-125 absolute bottom-0 right-0 z-10 w-[1000px] h-[1000px] mb-[-645px] mr-[-290px]" 
            src="/images/landing_page_3.svg" 
            alt="Landing Page Corner Image"
          />
          <img 
            className="brightness-125 absolute bottom-0 left-0 z-10 w-[370px] h-[460px] mb-[-320px]" 
            src="/images/Broken_glass_1.svg" 
            alt="Broken Glass Image"
          />
          <img 
            className="brightness-125 absolute bottom-0 left-0 z-10 w-[150px] h-[150px] mb-[-55px] ml-[137px]" 
            src="/images/Broken_glass_2.svg" 
            alt="Broken Glass Image"
          />

          {/* Existing Logo i Image */}
          <img 
            className="brightness-125 absolute w-auto z-20 top-0 left-[27rem]" 
            src="/images/TinkHackLogoI.svg" 
            alt="Logo i" 
          />

          {/* Main Logo Image */}
          <img 
            className="brightness-125 w-auto h-[610px] relative flex z-10 mx-auto" 
            src="/images/TinkHackLogoMain.svg" 
            alt="Tink Hack Logo" 
          />
        </div>
      </section>

      <section id="about" className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative pt-32">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          About
        </h2>

        {/* Background Image */}
        <div className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div>

        {/* Image and About Text Container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {/* Image for the Upper-Left Corner */}
          <img 
            className="brightness-125 z-10 w-[800px] h-[850px] ml-[-810px] absolute top-[140px]"
            src="/images/Bubble.svg" 
            alt="Bubble Image" />
          
          {/* About Text */}
          <div className="text-center px-4 relative z-10 max-w-4xl">
            <h1 className="text-lg mt-8">
              Aith about Tinkith about tinkerhubmec. Lorem ipsum dolor sit a        Aith about Tinkith about tinkerhubmec. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Hack. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Hack. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
          </div>
        </div>
      </section>


      <section id="tracks" className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative">
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          Tracks
        </h2>
        
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        
        <div className="container relative flex">
          <img 
            className="brightness-125 absolute left-0 z-10 rotate-90 opacity-60 w-[300px] h-[600px] mb-[-405px] ml-[-70px] mt-[-30px] bottom-[-300px]" 
            src="/images/Broken_glass_1.svg" 
            alt="Broken Glass Image"/>
        </div>
      </section>

      <section id="timeline" className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          Timeline
        </h2>
        <div className="container relative flex">
          <img 
            className="brightness-125 absolute z-10 w-[500px] h-[800px] top-0 right-0 mt-[-500px]" 
            src="/images/timeline.svg" 
            alt="Bubble Image"
          />
        </div>
      </section>

      <section id="prizes" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          Prizes
        </h2>
      </section>

      <section id="sponsors" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
        <div className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          Sponsors
        </h2>
      </section>

      <section id="faq" className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          FAQs
        </h2>
        <div className="container relative flex">
          <img 
            className="brightness-125 absolute z-10 top-[12px] left-[40px]" 
            src="/images/Broken_glass_3.svg" 
            alt="Broken Glass Image"
            style={{ width: '200px', height: '400px' }} 
          />
        </div>
      </section>

      <section id="contact" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
        <div className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]" style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}></div>
        <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
        <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
          Contact Us
        </h2>
      </section>
    </>
  );
};

export default MainContent;
