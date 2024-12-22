import React from 'react';
import TimelineImage from '@/assets/timeline.svg'; 
import Image from 'next/image';
import FrameImage from '@/assets/Frame-1.svg';

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={FrameImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div> 
      {/* Overlay for readability */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent">
        Timeline
      </h2>
      <Image
      className="brightness-125 absolute z-10 w-[500px] h-[800px] top-0 right-0 mt-[-250px]"
          src={TimelineImage}
          alt="Bubble Image"
          width={500} 
          height={800} 
          />
   
      <div className="container relative flex"></div>
    </section>
  );
};

export default Timeline;
