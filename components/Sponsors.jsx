import React from 'react';
import BackgroundImage from '@/assets/background.svg';
import Image from 'next/image';
import Replit from '@/assets/replit.svg';  

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="bg-custom-dark text-white flex flex-col items-center justify-center relative px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 py-16 font-satoshi"
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
      
      <div className="relative z-10 w-full flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-16 relative 
        after:content-['']  after:absolute after:h-[5px] after:bg-white after:left-2/3 after:ml-1.55 after:transform after:-translate-x-1/2 after:bottom-[-10px] after:w-[100px]"
      >
        Sponsors
      </h2>

        {/* Sponsor Rows */}
        <div className="relative z-10 flex flex-col gap-10 items-center">
          {/* Title Sponsor */}
          <div className="p-3 rounded-3xl bg-gradient-to-br from-[#814769] to-[#9e7a4a] text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300">            
            <h3 className="text-2xl font-semibold text-base mb-2 text-center">Title Sponsor</h3>
            <Image src={Replit} width={80} height={80} alt="replit" className="mb-2" />
            <p className=" text-sm text-center">Replit</p>
          </div>

          {/* Platinum Sponsors */}
          <div className="flex gap-8 flex-wrap justify-center">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="p-3 rounded-3xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(-45deg, #3d3b40, #67666b, #3d3b40)',
                }}
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Platinum Sponsor</h3>
                <Image src={Replit} width={80} height={80} alt="replit" className="mb-2" />
                <p className="text-sm text-center">Replit</p>
              </div>
            ))}
          </div>

          {/* Gold Sponsors */}
          <div className="flex gap-8 flex-wrap justify-center">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-3 rounded-3xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(155deg, #675736, #201e23)',
                }}
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Gold Sponsor</h3>
                <Image src={Replit} width={80} height={80} alt="replit" className="mb-2" />
                <p className=" text-sm text-center">Replit</p>
              </div>
            ))}
          </div>

          {/* Silver Sponsors */}
          <div className="flex gap-8 flex-wrap justify-center">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="p-3 rounded-3xl text-white shadow-lg w-[240px] h-[180px] flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(155deg, #454449, #201e23)',
                }}
              >
                <h3 className="text-2xl text-base font-semibold mb-2 text-center">Silver Sponsor</h3>
                <Image src={Replit} width={80} height={80} alt="replit" className="mb-2" />
                <p className=" text-sm text-center">Replit</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
