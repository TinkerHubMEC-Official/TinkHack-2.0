"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';
import BrokenGlassImage from '@/assets/Broken_glass_1.svg';

const Tracks = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000); // Simulate loading effect

    const handleResize = () => {
      setIsMobile(window.innerWidth < 818);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tracks = [
    {
      title: 'Developer Tools',
      description:'Harness the power of generative AI to create and enhance advanced tools for developers. Focus on automating coding tasks and refining the code, debugging and fixing errors, improving performance, and streamlining the overall software development lifecycle.',
    },
    {
      title: 'Fintech',
      description:'Revolutionize the financial sector with AI-powered solutions. Address real-world financial problems, challenge the boundaries of technology, and utilise your reserves of creativity and innovation in tackling pressing issues in the financial sector of the tech industry.',
    },
    {
      title: 'Productivity and Automation',
      description:'Develop AI-based solutions to enhance productive collaboration across industries. Automate tasks, optimize workflows, make breakthroughs in communication, simplify data access, and develop on productivity through cutting-edge automation tools.',
    },
    {
      title: 'Creativity Tools',
      description:'Design AI solutions for creative professionals, including artists, designers, photographers, and musicians. Bring a boost on artistic expression, demystifying intricate processes, and nurturing innovation in creative fields.',
    },
    {
      title: 'Smart Cities and Urban Innovation',
      description:'Innovate for smarter, more sustainable cities with AI-driven solutions. Trivialise urban challenges, rethink city planning, and contribute to the advancement of efficient, future-ready urban environments incorporating sustainable practices.',
    },
    {
      title: 'Open Innovation',
      description:'Revolutionise the core ideology of engineering in this open-ended track, left free for your perusal. Use AI to find solutions for real-world problems, push technological boundaries, and demonstrate your originality and problem-solving chops through the practical solutions you come up with.',
    },
  ];

  return (
    <section
      id="tracks"
      className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-8 sm:p-8 pb-20 lg:p-8 font-satoshi"
    >
      <h2
        className="text-5xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent py-12 sm:text-center md:text-center lg:text-left lg:ml-[10%] 
        after:content-[''] after:absolute after:h-[5px] after:w-[95px] after:bg-white after:left-0 lg:after:left-0 after:bottom-[40px]"
        data-aos="fade-up"
      >
        Tracks
      </h2>

      {/* Background Image */}
      <div>
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Image
        className={`brightness-125 absolute left-0 z-10 rotate-90 opacity-60 w-[300px] h-[600px] mb-[150px] left-9 mt-[-30px] bottom-[-170px] transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'}`}
        src={BrokenGlassImage}
        alt="Broken Glass Image"
        width={300}
        height={600}
        data-aos="zoom-in"
      />

      <div className="relative z-10 flex flex-col gap-8 p-4">
        {isMobile ? (
          // Mobile View: Display all boxes vertically
          <div className="flex flex-col items-center gap-8">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:shadow-sm hover:scale-[1.02] p-2 w-[90%] sm:w-[80%] lg:w-[60%]"
                data-aos="fade-up"
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
                  className="p-6 max-w-[400px] rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:shadow-sm hover:scale-[1.02] p-2"
                  data-aos="fade-right"
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
                  className="p-6 max-w-[400px] min-w-[300px] rounded-xl bg-gradient-to-b from-[#323035] to-[#252327] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:shadow-sm hover:scale-[1.02] p-2"
                  data-aos="fade-left"
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
