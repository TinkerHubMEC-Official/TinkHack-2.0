"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import BubbleImage from '@/assets/Bubble.svg';

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
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative pt-14 font-satoshi pb-20 lg:-mt-12"
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
      <h2 className="text-5xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-14 sm:text-center md:text-center lg:text-left lg:mr-[65%]
        after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white  after:transform after:-translate-x-1/2 after:bottom-[-10px] after:left-0 after:translate-x-0 after:w-[85px] sm:after:left-0 sm:after:translate-x-0 sm:after:w-[85px] md:after:left-0 md:after:translate-x-0 md:after:w-[85px] lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
      >
        Prizes
      </h2>
      
      {isMobile ? (
        // Mobile View
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="flex justify-center gap-8">
            <div
              className="p-6 rounded-xl text-white bg-gradient-to-br from-[#956a7b] to-[#8f8064] w-[220px] sm:w-[200px] h-[120px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">1st Prize</h3>
              <p className="text-4xl font-bold text-center">₹50,000</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-8">
            <div
              className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[220px] sm:w-[200px] h-[120px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">2nd Prize</h3>
              <p className="text-4xl font-bold text-center">₹20,000</p>
            </div>
            <div
              className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[220px] sm:w-[200px] h-[120px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
              data-aos="fade-right"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹10,000</p>
            </div>
          </div>

          {/* Third Row */}
          <div
            className="p-6 rounded-xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[220px] sm:w-[200px] h-[180px] lg:w-[300px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">Best Fintech Project</h3>
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
              <div
                className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[300px] sm:w-[250px] lg:w-[250px] h-[120px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
                data-aos="fade-right"
              >
                <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">2nd Prize</h3>
                <p className="text-4xl font-bold text-center">₹20,000</p>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl text-white bg-gradient-to-br from-[#956a7b] to-[#8f8064] w-[200px] sm:w-[250px] lg:w-[250px] h-[140px] -mt-2 transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
              data-aos="zoom-in"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-4 text-center" style={{ fontSize: '150%' }}>
                1st Prize
              </h3>
              <p className="text-4xl font-bold text-center p-2" style={{ fontSize: '250%' }}>
                ₹50,000
              </p>
            </div>

            <div
              className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[250px] h-[120px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹10,000</p>
            </div>
          </div>

          {/* Second Row */}
          <div
            className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[250px] h-[170px] transform transition-transform duration-300 ease-in-out hover:shadow-sm hover:scale-[1.02]"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">Best Fintech Project</h3>
            <p className="text-4xl font-bold text-center mt-4">₹20,000</p>
            <Image src={SIB} width={500} alt="SIB" />
          </div>


          <div
          className="absolute z-10 w-[150px] h-[300px] -bottom-[220px] -left-72"
          // data-aos="fade-up"
        >
          <Image
            className={`brightness-125 transition-transform bottom-0 duration-1000 sm:h-[200px] sm:ml-70 md:h-[250px] md:ml-100 lg:ml-30  lg:h-[350px] lg:pb-10
              w-[250px] h-[250px] mb-[-3px]
                    sm:w-[300px] sm:mb-[-350px] 
                    md:w-[350px] md:mb-[-400px] 
                    lg:w-[350px] lg:mb-[-450px] }`}
            src={BubbleImage}
            alt="Bubble Image"
          />
        </div>


        </div>




      )}
    </section>
  );
};

export default Prizes;
