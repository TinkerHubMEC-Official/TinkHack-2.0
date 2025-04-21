"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BrokenGlassImage from '@/assets/Broken_glass_3.svg';
import ArrowDown1 from '@/assets/arrow_down_1.svg';
import ArrowDown2 from '@/assets/arrow_down_2.svg';

const Faq = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "Who can participate in TinkHack?",
      answer: "Anyone! TinkHack is open to anyone with a passion for tech. Innovation knows no age! ",
    },
    {
      question: "Will there be any registration fees for participation?",
      answer: "No, there is no registration fee. It is completely free.",
    },
    {
      question: "Why should I participate in TinkHack?",
      answer: "TinkHack, Kerala's first GenAI event, unites some of the brightest minds from  across the country. By participating, you'll have the opportunity to network with some  incredible people, work on innovative and exciting projects, and gain valuable insights from our mentors to sharpen your skills.",
    },
    {
      question: "Can a team have members from different colleges or institutions?",
      answer: "Absolutely! Your team can consist of people from any institution or background. We encourage diverse collaborations, as we believe there's something valuable to learn from everyone.",
    },
    {
      question: "What is the team size limit?",
      answer: "A team can have a maximum of 4 members.",
    },
    {
      question: "Where will the event be held?",
      answer: "The event will be held at Govt. Model Engineering College, Thrikkakara.",
    },
    // {
    //   question: "Can I work on my project before the hackathon?",
    //   answer: "You are not allowed to work on your project prior to the hackathon, but you are welcome to brainstorm ideas and fine-tune your plan in preparation.",
    // },
    {
      question: "Should the projects be made Open Source?",
      answer: "Yes. All the project repositories should be made publicly available on GitHub.",
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
      className="min-h-screen bg-custom-dark text-white bg-pattern flex flex-col items-center justify-center relative p-4 font-satoshi py-28"
    >
      {/* <div>
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <h2 className="text-5xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent sm:-mb-4 mb-6
        after:content-[''] after:absolute after:h-[5px] after:bg-white after:left-0 after:right-0 after:bottom-[-10px]"
      >
        FAQ
      </h2>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Image
          className={`brightness-125 absolute z-0 scale-[0.9] top-[300px] left-[50px] md:top-[240px] md:left-[70px] lg:top-[280px] lg:left-[90px] mobile-glass-image transition-all duration-300 transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-[100%]'}`}
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
            data-aos="fade-up"
            className="mb-4 p-6 rounded-xl cursor-pointer bg-gradient-to-b from-[#302e33] to-[#262429] text-white shadow-lg shadow-[0_-1px_2px_rgba(255,255,255,0.2),0_2px_2px_rgba(0,0,0,0.2)] w-full max-w-2xl mx-auto hover:scale-[1.02] hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent">
                {faq.question}
              </h3>
              <Image
                src={openIndexes.includes(index) ? ArrowDown2 : ArrowDown1}
                alt="dropdown"
                className="transition-transform duration-900 ease-in-out"
                width={24}
                height={24}
                style={{
                  transform: openIndexes.includes(index) ? 'rotate(0deg)' : 'rotate(0deg)', // Flip icon on open/close
                }}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndexes.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionProperty: 'max-height, opacity',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: openIndexes.includes(index) ? '500ms' : '250ms',
              }}
            >
              <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
