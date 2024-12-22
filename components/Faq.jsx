"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import FrameImage from '@/assets/Frame-1.svg';
import BrokenGlassImage from '@/assets/Broken_glass_3.svg';
import ArrowDown1 from '@/assets/arrow_down_1.svg';
import ArrowDown2 from '@/assets/arrow_down_2.svg';

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: 'When and where is the hackathon taking place?',
      answer: 'The hackathon will take place on 11th and 12th of November in Model Engineering College, Thrikkakara.',
    },
    {
      question: 'Do I need to have a team to participate?',
      answer: 'Yes, teams are required to participate. You can form a team before or during the event.',
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, there is no registration fee. It is completely free.',
    },
    {
      question: 'Can I work on a project that I\'ve already started?',
      answer: 'Yes, you can continue working on an existing project, provided you declare it during registration.',
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-4"
    >
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

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-custom-dark opacity-50 z-1"></div>

      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent">
        FAQ
      </h2>
      
      {/* Broken Glass Image */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Image
          className="brightness-125 absolute z-0 scale-[0.9] top-[150px] left-[50px] md:top-[180px] md:left-[70px] lg:top-[200px] lg:left-[90px] mobile-glass-image transition-all duration-300"
          src={BrokenGlassImage}
          alt="Broken Glass Image"
          width={270}
          height={400}
        />
      </div>

      <div className="relative z-10 flex flex-col mt-8 w-full max-w-8xl p-4 md:pl-[17rem] md:pt-[3rem]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-6 rounded-xl bg-gradient-to-b from-[#302e33] to-[#262429] text-white shadow-lg shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_2px_2px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full max-w-2xl mx-auto transform hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <Image
                src={openIndexes.includes(index) ? ArrowDown2 : ArrowDown1}
                alt="dropdown"
                className="transition-transform duration-300"
                width={24}
                height={24}
                style={{ transform: openIndexes.includes(index) ? 'rotate(0deg)' : 'rotate(0deg)' }}
              />
            </div>
            {openIndexes.includes(index) && (
              <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
