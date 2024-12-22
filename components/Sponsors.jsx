import React from 'react';
import FrameImage from '@/assets/Frame-1.svg';  
import Image from 'next/image';

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="h-screen bg-custom-dark text-white flex items-center justify-center relative"
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
        Sponsors
      </h2>
    </section>
  );
};

export default Sponsors;
