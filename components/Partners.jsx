"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';
import BackgroundImage from '@/assets/background.svg';
import Image from 'next/image';
import balsamiq from '@/assets/balsamiq.png';
import WeCode from '@/assets/WeCode2.png';
import Mukti from '@/assets/Mukti.png';
import InterviewBuddy from '@/assets/InterviewBuddy1.png';
// import InterviewBuddy2 from '@/assets/InterviewBuddy2.png';
// import InterviewBuddy3 from '@/assets/InterviewBuddy3.png';

const Partners = () => {
  const partners = [
    { name: 'WeCode', image: WeCode },
    { name: 'InterviewBuddy', image: InterviewBuddy},
    { name: 'Mukti', image: Mukti },
    { name: 'Balsamiq', image: balsamiq },
    { name: 'WeCode', image: WeCode },
    { name: 'InterviewBuddy', image: InterviewBuddy},
    { name: 'Mukti', image: Mukti },
    { name: 'Balsamiq', image: balsamiq },
    { name: 'WeCode', image: WeCode },
    { name: 'InterviewBuddy', image: InterviewBuddy},
    { name: 'Mukti', image: Mukti },
    { name: 'Balsamiq', image: balsamiq },
    { name: 'WeCode', image: WeCode },
    { name: 'InterviewBuddy', image: InterviewBuddy},
    { name: 'Mukti', image: Mukti },
    { name: 'Balsamiq', image: balsamiq },
    { name: 'WeCode', image: WeCode },
    { name: 'InterviewBuddy', image: InterviewBuddy},
    { name: 'Mukti', image: Mukti },    
    { name: 'Balsamiq', image: balsamiq },
   
    

  ];

  return (
    <section
      id="sponsors"
      className="min-h-screen bg-custom-dark bg-pattern w-screen text-white flex flex-col items-center justify-center relative font-satoshi -mt-40 -mb-60 sm:-mt-40 sm:-mb-80 md:-mb-80 md:-mt-40 lg:-mb-10 lg:-mt-60"
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}

      <div className="relative z-10 w-full flex flex-col items-center" data-aos="fade-up"
      >
        <h2 className="text-5xl sm:text-5xl px-20 font-bold text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-14 relative"
        data-aos="fade-up"
        data-aos-delay="100"
        >
  Partners
  <span
    className="absolute left-1/3 transform -translate-x-1/3 bottom-[-4px] w-[92px] h-[5px]
    sm:w-[280px] sm:left-1/3 sm:-translate-x-1/3 sm:bottom-[-12px]
    md:w-[110px] md:left-1/3 md:-translate-x-1/3
    lg:left-1/3 lg:-translate-x-1/3 lg:w-[100px]  bg-white"
  ></span>
  {/* <span
    className=" block sm:hidden absolute left-1/3 transform -translate-x-1/2 bottom-[40px] ml-12 w-[120px] h-[4px] bg-white"
  ></span> */}
</h2>





   {/* Scrolling Partner Boxes */}


      {/*GRADIENT BOXES*/}
        {/* <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden">
          <div className="flex">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-6 mt-12 z-10 flex flex-col items-center justify-center transition-all duration-300 relative"
                style={{
                  width: '200px',  // Box width
                  height: '200px', // Box height
                  borderRadius: '16px', // Small border radius
                  overflow: 'hidden', // Prevent image overflow outside the border
                  background: 'linear-gradient(to bottom, rgba(256, 131, 189, 0.6), rgba(256, 131, 189, 0) )', // Moves transparency upwards
                }}
              >
                {/* Black Background Behind Gradient
                <div
                          className="absolute inset-0 z-0 h-[12.25rem] w-[12.25rem] mt-[2.4px] ml-[2.2px] bg-[#1a181c]"
                          style={{
                            // background: 'black', // Default black background inside box
                            borderRadius: '16px', // Apply same rounded corners
                          }}
                        ></div>
                {/* Image container 
                <div className="w-ful z-20 h-full flex flex-col items-center justify-center rounded-md overflow-hidden">
                  <Image
                    src={partner.image}
                    width={160}   // Image width
                    height={160}  // Image height
                    alt={partner.name}
                    className="object-cover rounded-xl"  // Rounded image
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
 */}






     {/*GREY BOXES*/}

        {/* Marquee Effect */}
        <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden
        lg:-mb-64" data-aos="fade-up">
  <div className="flex gap-8 ml-8">
    {partners.map((partner, index) => (
      <div
        key={index}
        className="flex flex-col items-center shadow-lg justify-center -py-4 transition-all duration-300 relative"
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'linear-gradient(155deg, #3e1b2e, #433419)',
        }}
      >
        {/* Wrapper with dynamic width and height */}
        <div className="w-[180px] h-[130px] sm:w-[220px] sm:h-[140px] flex flex-col justify-center items-center">
          {/* Partner Image */}
          <div className="flex items-center justify-center h-full w-full">
            <Image
              src={partner.image}
              width={80}
              height={80}
              alt={partner.name}
              className="object-contain rounded-md"
            />
          </div>
          {/* Partner Name */}
          <p className="text-white text-center mb-2 font-light text-xs">{partner.name}</p>
        </div>
      </div>
    ))}
  </div>
</Marquee>





        {/* Static Partner Boxes */}


        {/* <div className="flex flex-wrap gap-x-16 gap-y-10 sm:gap-y-14 md:gap-y-20 px-8 justify-center max-w-[1000px]">
        {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg justify-center transition-all duration-300 relative"
              style={{
                width: '200px',
                height: '120px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(155deg, #454449, #201e23)',
              }}
            >
              {/* Partner Image 
              <div className="flex items-center justify-center h-full w-full">
                <Image
                  src={partner.image}
                  width={80}
                  height={80}
                  alt={partner.name}
                  className="object-contain rounded-md"
                />
              </div>
              {/* Partner Name 
              <p className="text-white text-center mb-2 font-medium text-xs">
                {partner.name}
              </p>
            </div>
          ))}
        </div> */}





      </div>
    </section>
  );
};

export default Partners;
