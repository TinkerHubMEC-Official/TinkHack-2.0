"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';
import BackgroundImage from '@/assets/background.svg';
import Image from 'next/image';
import balsamiq from '@/assets/balsamiq.png';
import WeCode from '@/assets/WeCode2.png';
import Mukti from '@/assets/Mukti.png';
import InterviewBuddy from '@/assets/InterviewBuddy1.png';

const Partners = () => {
  const partners = [
    { name: 'WeCode', image: WeCode, url: 'https://www.instagram.com/wecodemalayalam/' },
    { name: 'InterviewBuddy', image: InterviewBuddy, url: 'https://interviewbuddy.net' },
    { name: 'Mukti', image: Mukti, url: 'https://www.linkedin.com/company/mukticommunity/' },
    { name: 'Balsamiq', image: balsamiq, url: 'https://balsamiq.com' },
    { name: 'WeCode', image: WeCode, url: 'https://www.instagram.com/wecodemalayalam/' },
    { name: 'InterviewBuddy', image: InterviewBuddy, url: 'https://interviewbuddy.net' },
    { name: 'Mukti', image: Mukti, url: 'https://www.linkedin.com/company/mukticommunity/' },
    { name: 'Balsamiq', image: balsamiq, url: 'https://balsamiq.com' },
    { name: 'WeCode', image: WeCode, url: 'https://www.instagram.com/wecodemalayalam/' },
    { name: 'InterviewBuddy', image: InterviewBuddy, url: 'https://interviewbuddy.net' },
    { name: 'Mukti', image: Mukti, url: 'https://www.linkedin.com/company/mukticommunity/' },
    { name: 'Balsamiq', image: balsamiq, url: 'https://balsamiq.com' },
    { name: 'WeCode', image: WeCode, url: 'https://www.instagram.com/wecodemalayalam/' },
    { name: 'InterviewBuddy', image: InterviewBuddy, url: 'https://interviewbuddy.net' },
    { name: 'Mukti', image: Mukti, url: 'https://www.linkedin.com/company/mukticommunity/' },
    { name: 'Balsamiq', image: balsamiq, url: 'https://balsamiq.com' },
    { name: 'WeCode', image: WeCode, url: 'https://www.instagram.com/wecodemalayalam/' },
    { name: 'InterviewBuddy', image: InterviewBuddy, url: 'https://interviewbuddy.net' },
    { name: 'Mukti', image: Mukti, url: 'https://www.linkedin.com/company/mukticommunity/' },
    { name: 'Balsamiq', image: balsamiq, url: 'https://balsamiq.com' },
  ];

  return (
    <section
      id="sponsors"
      className="min-h-screen bg-custom-dark bg-pattern w-screen text-white flex flex-col items-center justify-center relative font-satoshi -mt-40 -mb-60 sm:-mt-40 sm:-mb-80 md:-mb-80 md:-mt-40 lg:-mb-10 lg:-mt-60"
    >
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
  </h2>
        <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden lg:-mb-64" data-aos="fade-up">
          <div className="flex gap-8 ml-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name}`}
                className="flex flex-col items-center shadow-lg justify-center -py-4 transition-all duration-300 relative cursor-pointer hover:scale-105 hover:shadow-xl"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(155deg, #3e1b2e, #433419)',
                }}
              >
                <div className="w-[180px] h-[130px] sm:w-[220px] sm:h-[140px] flex flex-col justify-center items-center">
                  <div className="flex items-center justify-center h-full w-full">
                    <Image
                      src={partner.image}
                      width={80}
                      height={80}
                      alt={partner.name}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <p className="text-white text-center mb-2 font-light text-xs">{partner.name}</p>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs py-1 px-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0 opacity-0 hover:opacity-100">
                    {partner.url.replace('https://', '')}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
