"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import SIB from '@/assets/sib.svg';

const Prizes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 816);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="prizes"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative pt-14 font-satoshi"
    >
      {/* Background Image */}
      <div >
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-5xl font-bold relative z-10 text-center 
  bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
  mb-8 sm:text-center md:text-center lg:text-left lg:mr-[65%]
  after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
  after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-10px]
  lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
>
  Prizes
</h2>



      {isMobile ? (
        // Mobile View
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="flex justify-center gap-8">
            <div className="p-6 rounded-xl text-white bg-gradient-to-br from-[#956a7b] to-[#8f8064] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-center">1st Prize</h3>
              <p className="text-4xl font-bold text-center">₹50,000</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-center">2nd Prize</h3>
              <p className="text-4xl font-bold text-center">₹20,000</p>
            </div>
            <div className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹10,000</p>
            </div>
          </div>

          {/* Third Row */}
          <div className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-center">Best Fintech Project</h3>
            <p className="text-4xl font-bold text-center">₹20,000</p>
            <Image src={SIB} width={500} alt="SIB" />
          </div>
        </div>
      ) : (
        // Desktop View
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
                <h3 className="text-lg font-semibold mb-2 text-center">2nd Prize</h3>
                <p className="text-4xl font-bold text-center">₹20,000</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl text-white bg-gradient-to-br from-[#956a7b] to-[#8f8064] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-center" style={{ fontSize: '150%' }}>
                1st Prize
              </h3>
              <p className="text-4xl font-bold text-center p-2" style={{ fontSize: '250%' }}>
                ₹50,000
              </p>
            </div>

            <div className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold mb-2 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹10,000</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-center">Best Fintech Project</h3>
            <p className="text-4xl font-bold text-center">₹20,000</p>
            <Image src={SIB} width={500} alt="SIB" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Prizes;
