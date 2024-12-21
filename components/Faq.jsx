"use client"
import React, { useState } from 'react';

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
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div> 
      {/* Overlay for readability */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        FAQ
      </h2>
      
      <img
        className="brightness-125 absolute z-0 scale-[0.9] top-[150px] left-[50px] md:top-[180px] md:left-[70px] lg:top-[200px] lg:left-[90px] mobile-glass-image transition-all duration-300"
        src="/images/Broken_glass_3.svg"
        alt="Broken Glass Image"
        style={{ width: '270px', height: '400px' }}
      />

      <div className="relative z-10 flex flex-col mt-8 w-full max-w-8xl p-4 md:pl-[17rem] md:pt-[3rem]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-6 rounded-xl bg-[#262628] text-white shadow-lg shadow-[0_-1px_3px_rgba(255,255,255,0.2),0_2px_2px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full max-w-2xl mx-auto"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <img
                src={openIndexes.includes(index) ? '/images/arrow_down_2.svg' : '/images/arrow_down_1.svg'}
                alt="dropdown"
                className="transition-transform duration-300 transform "
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
