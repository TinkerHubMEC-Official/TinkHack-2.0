"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import BubbleImage from '@/assets/Bubble.svg';
import SIB from '@/assets/sib.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prizes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });

    // Handle mobile check
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
      className="h-screen bg-custom-dark bg-pattern  text-white flex flex-col items-center justify-center relative pt-14 font-satoshi pb-20 lg:-mt-12"
    >
      {/* Background Image */}
      {/* <div >
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <h2 className="text-5xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-14 sm:text-center md:text-center lg:text-left lg:mr-[65%]
        after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white  after:transform after:-translate-x-1/2 after:bottom-[-10px] after:left-0 after:translate-x-0 after:w-[85px] sm:after:left-0 sm:after:translate-x-0 sm:after:w-[85px] md:after:left-0 md:after:translate-x-0 md:after:w-[85px] lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Prizes
      </h2>
      
      {isMobile ? (
        // Mobile View
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="flex justify-center gap-8">
            <div
              className="p-6 rounded-xl text-white w-[220px] sm:w-[200px] h-[120px] lg:w-[300px]  hover:shadow-sm hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(-45deg, #7f6b14, #a4944b, #7f6b14)',
              }}
              data-aos="zoom-in"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">1st Prize</h3>
              <p className="text-4xl font-bold text-center">₹50,000</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-8">
            <div
              className="p-6 rounded-xl text-white w-[220px] sm:w-[200px] h-[120px] lg:w-[300px]  hover:shadow-sm hover:scale-[1.02]"
              style={{
                  background: 'linear-gradient(-45deg, #444144, #7f7d7f, #444144)',
                }}
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">2nd Prize</h3>
              <p className="text-4xl font-bold text-center">₹30,000</p>
            </div>
            <div
              className="p-6 rounded-xl text-white w-[220px] sm:w-[200px] h-[120px] lg:w-[300px]  hover:shadow-sm hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(-45deg, #4f432c, #896a24, #4f432c)',
              }}
              data-aos="fade-right"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹20,000</p>
            </div>
          </div>

          {/* Third Row */}
          {/* <div
            className="p-6 rounded-xl text-white w-[220px] sm:w-[200px] h-[180px] lg:w-[300px]  hover:shadow-sm hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #be9b6a, #c36da2, #c268a0)',
            }}
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-2 -mt-1 text-center">Best Fintech Project</h3>
            <p className="text-4xl font-bold text-center">₹30,000</p>
            <Image src={SIB} width={500} alt="SIB" />
          </div> */}
        </div>
      ) : (
        // Desktop View
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-wrap justify-center gap-8">
              <div
                className="p-8 rounded-2xl text-white w-[300px] sm:w-[250px] lg:w-[250px] h-[120px] hover:shadow-sm hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(-45deg, #444144, #7f7d7f, #444144)',
                }}
                data-aos="fade-right"
              >
                <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">2nd Prize</h3>
                <p className="text-4xl font-bold text-center">₹30,000</p>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl text-white bg-gradient-to-br from-[#956a7b] to-[#8f8064] w-[200px] sm:w-[250px] lg:w-[250px] h-[140px] -mt-2  hover:shadow-sm hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(-45deg, #7f6b14, #a4944b, #7f6b14)',
              }}
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
              className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[250px] h-[120px]  hover:shadow-sm hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(-45deg, #4f432c, #896a24, #4f432c)',
              }}
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">3rd Prize</h3>
              <p className="text-4xl font-bold text-center">₹20,000</p>
            </div>
          </div>

          {/* Second Row */}
          {/* <div
            className="p-8 rounded-2xl text-white bg-gradient-to-b from-[#5e5c5f] to-[#3e3c40] w-[200px] sm:w-[250px] lg:w-[250px] h-[170px]  hover:shadow-sm hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #be9b6a, #c36da2, #c268a0)',
            }}
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold mb-2 -mt-4 text-center">Best Fintech Project</h3>
            <p className="text-4xl font-bold text-center mt-4">₹30,000</p>
            <Image src={SIB} width={500} alt="SIB" />
          </div> */}


          <div className=" flex w-full left-0 overflow-hidden">
  <Image
    className={`brightness-125 absolute transition-transform bottom-0 duration-1000 z-10
        w-[250px] h-[250px] -mb-20
        sm:w-[300px] sm:h-[200px] sm:-mb-[150px] sm:ml-[20-px]
        md:w-[350px] md:h-[250px] md:-mb-[200px] md:-ml-[190px]
        lg:w-[300px] lg:h-[300px] lg:-mb-[150px] lg:-ml-[270px]
        xl:-ml-[400px] 2xl:-ml-[550px] 3xl:-ml-[640px] 4xl:-ml-[760px]`}
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
