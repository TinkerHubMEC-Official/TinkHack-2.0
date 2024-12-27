"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import LandingPageImage1 from '@/assets/landing_page_1.svg'; 
import LandingPageImage2 from '@/assets/landing_page_2.svg'; 
import LandingPageImage3 from '@/assets/landing_page_3.svg';
import BrokenGlassImage1 from '@/assets/Broken_glass_1.svg'; 
import BrokenGlassImage2 from '@/assets/Broken_glass_2.svg'; 
import TinkHackLogoMain from '@/assets/TinkHackLogoMain.svg';

import img from '@/assets/2.0.svg';
import i from '@/assets/th i 1.png';
import Link from 'next/link'; 

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000); // Delay to simulate loading effect
  }, []);


  return (
    <section
      id="hero"
      className={` font-satoshi min-h-screen bg-custom-dark relative flex items-center z-10 justify-center transition-all duration-700 ${isLoaded ? 'blur-0' : 'blur-lg'}`}
    >
      {/* Background Image */}
      <div>
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container flex w-full">
        {/* New Image for the Upper-Left Corner */}
        <Image
          className={`brightness-125 absolute top-0 left-0 z-10 w-[400px] h-[150px] transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'}`}
          src={LandingPageImage1}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/* New Image for the Upper-Right Corner */}
        <Image
          className= {`brightness-125 absolute top-0 max-lg:hidden right-0 z-10 w-[450px] h-[380px] transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : 'translate-x-[100%]'}`}
          src={LandingPageImage2}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/* New Image for the Lower-Right Corner */}
        <Image
          className={`brightness-125 absolute bottom-0 right-0 z-10 transform transition-transform duration-1000 w-[250px] h-[250px] mb-[-120px] mr-[-10px] ${isLoaded ? 'translate-x-0' : 'translate-x-[100%]'}
            sm:w-[300px] sm:h-[300px] sm:mb-[-200px] 
            md:w-[350px] md:h-[400px] md:mb-[-300px] 
            lg:w-[450px] lg:h-[500px] lg:mb-[-620px]`}
          src={LandingPageImage3}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/* Broken glass images */}
        <Image
          className={`brightness-125 absolute bottom-0  z-50  transform transition-transform duration-1000 w-[190px] h-[250px] mb-[-20px] ml-[10px] ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'}
           sm:w-[240px] sm:h-[300px] sm:mb-[10px] sm:ml-[-60px]
           md:w-[280px] md:h-[400px] md:mb-[-50px]  md:ml-[-20px]
           lg:w-[320px] lg:h-[500px] lg:mb-[-100px] lg:ml-[60px]`}
          src={BrokenGlassImage1}
          alt="Broken Glass Image"
          layout="intrinsic"
        />
        <Image
          className={`brightness-125 absolute bottom-0  z-50  transform transition-transform duration-1000 w-[80px] h-[250px] mb-[45px] ml-[80px] ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'} 
            sm:w-[80px] sm:h-[300px] sm:mb-[95px] sm:ml-[40px]
            md:w-[100px] md:h-[400px] md:mb-[40px]  md:ml-[90px]
            lg:w-[150px] lg:h-[150px] lg:mb-[-10px] lg:ml-[160px]`}
          src={BrokenGlassImage2}
          alt="Broken Glass Image"
          layout="intrinsic"
        />



        {/* Main Logo Image */}
        {/* <Image
          className={`brightness-125 w-auto h-[610px] relative flex z-10 mx-auto transition-all duration-700 mb-[170px] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}
            sm:mb-[60px] 
            md:mb-[20px] 
            lg:mb-[-80px]`}
          src={TinkHackLogoMain}
          alt="Tink Hack Logo"
          layout="intrinsic"
        /> */}



<div className={`z-10 flex items-center justify-center h-screen w-full transition-all duration-100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
  <div className="flex flex-col items-center justify-center gap-0 w-full relative">
    {/* Tink */}
    <h1 className="text-[4rem] font-productsansbold font-bold text-center -mt-40 sm:text-[6rem] sm:pt-6 md:text-[8.5rem] lg:text-[9rem] lg:-mt-14 relative">
      T<span className="relative inline-block">
        i
        {/* 'i' Dot */}
        <Image
          src={i}
          alt="Dot Image"
          className="absolute top-[1.3rem] left-[0.05rem] w-[1rem] h-[1rem] sm:top-[1.8rem] sm:left-[0.05rem] sm:w-[2rem] sm:h-[1.8rem] md:w-[9rem] md:h-[3rem] md:top-[2.3rem] md:left-[0.0rem] lg:top-[2.65rem] lg:left-5rem] lg:w-[40px] lg:h-[45px] rounded-3xl"
        />
      </span>
      nk
      {/* '2.0' Image */}
      <Image
        src={img}
        alt="2.0 Image"
        className="absolute top-[0.2rem] left-[40%] w-[3rem] h-[3rem] sm:top-[2.1rem] sm:left-[42%] sm:w-[4rem] sm:h-[4rem] md:top-[1.3rem] md:left-[41%] md:w-[6rem] md:h-[7rem] lg:w-[6rem] lg:h-[6rem] lg:top-[2.4rem] lg:left-[43%]"
      />
    </h1>
    {/* HACK */}
    <h1
      className="text-[2.7rem] font-khuja font-medium text-center -mt-5 pl-2 sm:text-[4rem] sm:-mt-8 sm:pl-3 md:text-[6rem] md:-mt-11 md:pl-4 lg:text-[6rem] leading-none scale-y-[1.2] lg:-mt-12 lg:pl-6 bg-gradient-to-br from-[#f3f302] via-[#e23be6] to-[#0000ff] text-transparent bg-clip-text"
    >
      HACK
    </h1>
  </div>
</div>


        {/* Register Now Button */}
        <Link href="https://mec.tinkerhub.org" target="_blank" rel="noopener noreferrer">
        <button
          className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 py-1.5 text-xl pr-2 pl-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-[#1E1E1E] rounded-[30px] border-[1px] border-[#E283BD] hover:border-[#E2CF6C] hover:shadow-lg transition-all hover:scale-105 
          z-10 mb-[210px] sm:mb-[40px] md:mb-[-10px]
          sm:px-9 
          md:px-11
          lg:px-12"
        >
          Register Now
        </button>

    </Link>
      </div>
    </section>
  );
};

export default Landing;
