"use client"
import React, { useState, useEffect } from 'react';
import TimelineImage from '@/assets/timeline.svg'; 
import Image from 'next/image';
import BackgroundImage from '@/assets/background.svg';

const Timeline = () => {
      const [isLoaded, setIsLoaded] = useState(false);
        useEffect(() => {
          setTimeout(() => setIsLoaded(true), 1000); // Delay to simulate loading effect
        }, []);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const events = [
    {
      date: '1pm, 3rd March',
      title: 'Registration Starts',
      description:
        'TinkHack registration opens. Students can register via Devfolio by submitting their project proposals.',
    },
    {
      date: '7am, 3rd March',
      title: 'Project Submission',
      description:
        'Teams must finalize and submit their projects before the deadline.',
    },
    {
      date: '9am, 3rd March',
      title: 'Evaluation Starts',
      description:
        'Judges will begin evaluating submitted projects based on innovation, execution, and impact.',
    },
    {
      date: '12pm, 3rd March',
      title: 'Closing Ceremony',
      description:
        'Discover the champions of progress and the architects of tomorrow. The grand stage is where innovators revel in their triumphs.',
    },
    
  ];

  const getGradientColor = (index, total) => {
    const startColor = [226, 131, 189]; 
    const endColor = [226, 207, 108];  

    const ratio = index / (total - 1);
    const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
    const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
    const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1260) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="min-h-screen  text-white flex flex-col items-center justify-center relative font-satoshi"
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

      <h2 className="text-5xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
        after:content-[''] after:absolute after:h-[5px] after:w-[80px] after:bg-white after:left-2/3 after:ml-2 after:transform after:-translate-x-1/2 after:bottom-[-10px]"
      >
        Timeline
      </h2>

      <Image
        className={`brightness-125 absolute z-10 w-[500px] h-[800px] top-0 right-0 mt-[-250px] transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : 'translate-x-[100%]'}`}
        src={TimelineImage}
        alt="Bubble Image"
        width={500}
        height={800}
      />

      {/* Conditional Rendering for Timeline Container */}
      {isLargeScreen ? (
        <div className="container relative flex flex-col items-center z-10 mt-10">
          <div
            className="w-0.5 bg-gradient-to-b from-[#E283BD] to-[#E2CF6C] absolute"
            style={{ top: '50px', bottom: '50px', height: 'calc(100% - 131.5px)' }}
          ></div>
          {events.map((event, index) => {
            const color = getGradientColor(index, events.length);

          return (
        <div
          key={index}
          className={`relative flex items-center w-full mb-6 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          {/* Date Position */}
          <p
            className={`text-sm absolute ${
              index % 2 === 0
                ? 'right-[calc(50%-160px)] xl:right-[calc(50%-120px)] lg:right-[calc(50%-100px)]'
                : 'left-[calc(50%-160px)] xl:left-[calc(50%-120px)] lg:left-[calc(50%-100px)]'
            }`}
            style={{ color }}
          >
            {event.date}
          </p>

          {/* Event Box */}
          <div
          className={`relative max-w-[400px] p-4 rounded-2xl bg-gradient-to-b from-[#353438] to-[#28262b] shadow-lg hover:shadow-sm hover:scale-[1.02] transition-all duration-300 text-white ${
            index % 2 === 0
              ? 'ml-[calc(50%+80px)] lg:ml-[calc(50%-460px)] md:ml-[calc(50%+40px)] sm:ml-[calc(50%+20px)]'
              : 'mr-[calc(50%+80px)] lg:mr-[calc(50%-460px)] md:mr-[calc(50%+40px)] sm:mr-[calc(50%+20px)]'
          }`}
        >
          <h3 className="font-semibold">{event.title}</h3>
          <p className="mt-2 text-sm">{event.description}</p>
        </div>

          {/* Circle */}
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: color,
            }}
          ></div>
          <div
            className="absolute w-4 h-4 rounded-full opacity-25"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: color,
            }}
          ></div>
        </div>
              );
            })}
          </div>
      ) : (
        <div className="container relative flex flex-col items-start z-10 mt-10 w-full max-w-4xl pr-4">
          {/*  Line */}
          <div
            className="w-0.5 bg-gradient-to-b from-[#E283BD] to-[#E2CF6C] absolute"
            style={{
            left: '2rem', 
            top: '68px',
            bottom: '50px',
            height: 'calc(90% - 100px)', 
            }}
          ></div>

          {events.map((event, index) => {
            const color = getGradientColor(index, events.length);

            return (
              <div key={index} className="relative flex items-center w-full mb-6">
                {/* Circle on the Line */}
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '2rem', 
                    transform: 'translateX(-50%)',
                    backgroundColor: color,
                  }}
                ></div>
                <div
                  className="absolute w-4 h-4 rounded-full opacity-25"
                  style={{
                    left: '2rem', 
                    transform: 'translateX(-50%)',
                    backgroundColor: color,
                  }}
                ></div>

                {/* Box with Gradient, Shadow, and Hover Effect */}
                <div
                  className="relative p-4 rounded-2xl bg-gradient-to-b from-[#353438] to-[#28262b] shadow-lg hover:shadow-sm hover:scale-[1.02] transition-all duration-300 ease-in-out text-white w-full md:w-[60%] sm:w-[80%] xs:w-[90%] pr-8"
                  style={{
                    marginLeft: 'calc(2rem + 1rem)', 
                  }} 
                >
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className=" text-xs text-gray-400">{event.date}</p>
                  <p className="mt-2 text-sm">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      )}
    </section>
  );
};

export default Timeline;
