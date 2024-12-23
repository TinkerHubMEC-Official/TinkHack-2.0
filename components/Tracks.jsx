"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import BrokenGlassImage from '@/assets/Broken_glass_1.svg';

const Tracks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 818);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tracks = [
    {
      title: 'Fintech',
      description:
        'Unlock the potential for financial innovation in the Fintech track. Develop AI solutions that address real-world financial challenges, push technology boundaries, and display your creativity and problem-solving skills in the financial sector.',
    },
    {
      title: 'Healthcare',
      description:
        'Transform the healthcare industry with innovative tech solutions. Develop AI-powered tools that enhance patient care, streamline operations, and tackle challenges in health management.',
    },
    {
      title: 'EdTech',
      description:
        'Revolutionize education with advanced tech in the EdTech track. Develop solutions that enhance learning experiences, improve accessibility, and address challenges faced by modern educational systems.',
    },
    {
      title: 'E-commerce',
      description:
        'Take the e-commerce industry to the next level with innovative solutions. Work on AI-driven tools for improving online shopping experiences, inventory management, and customer personalization.',
    },
    {
      title: 'Gaming',
      description:
        'Push the boundaries of gaming with cutting-edge tech. Develop AI-driven game mechanics, improve player engagement, and explore the latest trends in game development.',
    },
    {
      title: 'Sustainability',
      description:
        'Create tech solutions that address environmental challenges. Develop AI-powered systems that help reduce waste, conserve resources, and promote sustainable practices in various industries.',
    },
    
  ];

  return (
    <section
      id="tracks"
      className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-8 sm:p-8 lg:p-8"
    >
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent pb-16">
        Tracks
      </h2>
      {/* Background Image */}
      <div >
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Image
        className="brightness-125 absolute left-0 z-10 rotate-90 opacity-60 w-[300px] h-[600px] mb-[150px] left-9 mt-[-30px] bottom-[-170px]"
        src={BrokenGlassImage}
        alt="Broken Glass Image"
        width={300}
        height={600}
      />
      <div className="relative z-10 flex flex-col gap-8 p-4">
        {isMobile ? (
          // Mobile View: Display all boxes vertically
          <div className="flex flex-col items-center gap-8">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 p-2 w-[90%] sm:w-[80%] lg:w-[60%]"
              >
                <h3 className="text-lg font-semibold mb-2 text-white bg-clip-text text-transparent">
                  {track.title}
                </h3>
                <p className="text-xs text-gray-300">{track.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View: Display boxes in two rows
          <>
            <div className="flex justify-end gap-10 pl-24">
              {tracks.slice(0, 3).map((track, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 p-2 "
                >
                  <h3 className="text-lg font-semibold mb-2 text-white bg-clip-text text-transparent">
                    {track.title}
                  </h3>
                  <p className="text-xs text-gray-300">{track.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-10 pr-24 pt-6">
              {tracks.slice(3, 6).map((track, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 p-2 "
                >
                  <h3 className="text-lg font-semibold mb-2 text-white bg-clip-text text-transparent">
                    {track.title}
                  </h3>
                  <p className="text-xs text-gray-300">{track.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Tracks;
