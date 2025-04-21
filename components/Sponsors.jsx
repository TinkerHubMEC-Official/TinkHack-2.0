"use client"
import React, { useEffect } from 'react';
import BackgroundImage from '@/assets/background.svg';
import Image from 'next/image';
import dbiz from '@/assets/dbiz.png';
import LandingPageImage3 from '@/assets/landing_page_3.svg';
import SIB from '@/assets/SIB_New.png';
import wizr from '@/assets/wizr1.jpg';
import phoenix from '@/assets/Phoenix.png';
import eth from '@/assets/ethindia.png';
import devfolio from '@/assets/devfolio.png';


const Sponsors = () => {

  return (
    <section
      id="sponsors"
      className="bg-custom-dark bg-pattern  text-white flex flex-col items-center justify-center relative px-8 sm:px-8 md:px-16 lg:px-16 lg:pt-0 xl:px-16 py-16 font-satoshi"
    >
      {/* <div>
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2
          className="text-5xl font-bold text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-14 relative
        after:content-[''] after:absolute after:h-[5px] after:bg-white after:left-2/3 after:ml-1.55 after:transform after:-translate-x-1/2 after:bottom-[-10px] after:w-[100px]"
        data-aos="fade-up"
        data-aos-delay="100"
        >
          Sponsors
        </h2>

        <div className="relative z-10 flex flex-col gap-10 items-center">
          <div
            className="p-4 rounded-2xl bg-gradient-to-br from-[#814769] to-[#9e7a4a] text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300"
            data-aos="zoom-out"
          >
            <h3 className="text-2xl font-semibold text-base mb-2 text-center">Title Sponsor</h3>
            <a 
                  href="https://dbiz.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="dbiz.ai"
                  aria-label="dbiz.ai Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
            <Image src={dbiz} 
            width={80} 
            height={80} 
            alt="dbiz.ai" 
            className="mb-2 rounded-md" />
            <p className=" text-sm text-center">dbiz.ai</p>
            </a>
          </div>

          {/* Platinum Sponsors */}
          {/* <div className="flex gap-8 flex-wrap justify-center">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: 'linear-gradient(-45deg, #3d3b40, #67666b, #3d3b40)',
                }}
                data-aos={item === 1 ? "fade-right":"fade-left"}
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Platinum Sponsor</h3>
                <Image src={dbiz.ai} width={80} height={80} alt="dbiz.ai" className="mb-2" />
                <p className="text-sm text-center">dbiz.ai</p>
              </div>
            ))}
          </div> */}

          {/* Gold Sponsors */}
          {/* <div className="flex gap-8 flex-wrap justify-center">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: 'linear-gradient(155deg, #675736, #201e23)',
                }}
                data-aos={item === 1 ? "fade-right": item === 2 ? "zoom-in" : "fade-left"}
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Gold Sponsor</h3>
                <Image src={dbiz.ai} width={80} height={80} alt="dbiz.ai" className="mb-2" />
                <p className=" text-sm text-center">dbiz.ai</p>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col gap-8">
            <div className="flex gap-8 flex-wrap justify-center">
              <div
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
                data-aos="fade-right"
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Silver Sponsor</h3>
                <a
                  href="https://wizr.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="wizr.ai"
                  aria-label="wizr.ai Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={wizr}
                    width={105}
                    height={100}
                    alt="wizr.ai"
                    className="mb-2 rounded-md"
                  />
                  <p className="text-sm text-center">wizr.ai</p>
                </a>
              </div>

              <div
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
                data-aos="fade-up"
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Silver Sponsor</h3>
                <a
                  href="https://www.southindianbank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="South Indian Bank"
                  aria-label="South Indian Bank Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={SIB}
                    width={105}
                    height={100}
                    alt="South Indian Bank"
                    className="mb-2 rounded-md"
                  />
                  <p className="text-sm text-center">South Indian Bank</p>
                </a>
              </div>

             
              <div
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
                data-aos="fade-left"
              >
                <h3 className="text-2xl text-base font-semibold mb-5 text-center">Silver Sponsor</h3>
                <a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  // title="Devfolio"
                  aria-label="Devfolio Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={devfolio}
                    width={105}
                    height={100}
                    alt="DEVFOLIO LOGO"
                    className="mb-2 rounded-md"
                  />
                  <p className="text-sm text-center mt-5">Devfolio</p>
                </a>
              </div>
            </div>

            <div className="flex gap-8 flex-wrap justify-center">

            <div
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
                data-aos="fade-right"
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Silver Sponsor</h3>
                <a
                  href="https://phoenixmigrationservices.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Phoenix Study Abroad"
                  aria-label="Phoenix Study Abroad Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={phoenix}
                    width={105}
                    height={100}
                    alt="Phoenix Study Abroad"
                    className="mb-2 rounded-md ml-5"
                  />
                  <p className="text-sm text-center">Phoenix Study Abroad</p>
                </a>
              </div>

              <div
                className="p-3 rounded-2xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
                data-aos="fade-left"
              >
                <h3 className="text-2xl text-base font-semibold mb-5 text-center">Silver Sponsor</h3>
                <a
                  href="https://ethindia.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  // title="Ethindia"
                  aria-label="ETHIndia Website"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={eth}
                    width={105}
                    height={100}
                    alt="ETHINDIA LOGO"
                    className="mb-2 rounded-md"
                  />
                  <p className="text-sm text-center mt-5">ETHIndia</p>
                </a>
              </div>
            </div>
          </div>
        </div>
         <div className="container flex w-full">
                <Image
                  className={`brightness-125 absolute bottom-0 right-0 z-10 rotate-45 transform transition-transform duration-1000 w-[250px] h-[250px] mb-[-340px] mr-[-78px] 
                    sm:w-[300px] sm:h-[300px] sm:mb-[-350px] sm:-mr-[90px]
                    md:w-[350px] md:h-[400px] md:mb-[-400px] md:-mr-[128px]
                    lg:w-[350px] lg:h-[250px] lg:mb-[-380px] lg:-mr-[127px]`}
                  src={LandingPageImage3}
                  alt="Landing Page Corner Image"
                  layout="intrinsic"
                />
          </div>
      </div>
    </section>
  );
};

export default Sponsors;
