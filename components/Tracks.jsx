import React from 'react';
import Image from 'next/image';
import FrameImage from '@/assets/Frame-1.svg';
const Tracks = () => {
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
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-14 "
    >
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent pt-64 pb-16">
        Tracks
      </h2>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={FrameImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="rotate-180 scale-x-[-1]"
        />
      </div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div> 
      {/* Overlay for readability */}
      <img
        className="brightness-125 absolute left-0 z-10 rotate-90 opacity-60 w-[300px] h-[600px] mb-[150px] ml-[-70px] mt-[-30px] bottom-[-300px]"
        src="/images/Broken_glass_1.svg"
        alt="Broken Glass Image"
      />

      <div className="relative z-10 flex flex-col gap-8 p-4">
        <div className="flex justify-end gap-10 pl-24">
          {tracks.slice(0, 3).map((track, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#272528] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 p-2"
            >
              <h3 className="text-lg font-semibold mb-2 text-white bg-clip-text text-transparent ">
                {track.title}
              </h3>
              <p className="text-xs text-gray-300">
                {track.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-start gap-10 pr-24 pt-6">
          {tracks.slice(3, 6).map((track, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#272528] text-white shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_4px_3px_rgba(0,0,0,0.2)] transition-all duration-300 p-2"
            >
              <h3 className="text-lg font-semibold mb-2 text-white bg-clip-text text-transparent">
                {track.title}
              </h3>
              <p className="text-xs text-gray-300">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
