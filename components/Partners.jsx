"use client";
import React, { useEffect } from 'react';
import BackgroundImage from '@/assets/background.svg';
import Image from 'next/image';
import WeCode from '@/assets/wecode.jpeg';
import WeCode2 from '@/assets/wecode2.jpg';

import Replit from '@/assets/replit.svg';

import Marquee from 'react-fast-marquee'; // Import marquee library

const Partners = () => {
  // List of partner images to display, can easily add more here
  const partnerImages = [WeCode, WeCode2, Replit];  // Add more images as needed

  // Create an array of partner objects with their name and image, cycling through the images
  const partners = Array(8).fill(null).map((_, index) => ({
    name: `Partner ${index + 1}`,  // For identification
    image: partnerImages[index % partnerImages.length],  // Cycle through partner images
  }));

  return (
    <section
      id="sponsors"
      className="min-h-screen -mb-20 bg-custom-dark w-screen text-white flex flex-col items-center justify-center relative font-satoshi"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2
          className=" text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-14 relative"
        >
          Community Partners
          <span
            className="block absolute h-[5px] bg-white left-1/3 transform -translate-x-1/2 bottom-[-10px] w-[200px] sm:left-1/3 sm:-translate-x-1/2 sm:w-[280px] md:left-1/3 md:-translate-x-1/2 md:w-[270px] lg:left-1/3 lg:-translate-x-1/2 lg:w-[290px] " 
          ></span>
        </h2>

        {/* Scrolling Partner Boxes */}
        <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden">
          <div className="flex">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-6 mt-12 flex flex-col items-center justify-center transition-all duration-300 relative"
                style={{
                  width: '240px',  // Box width
                  height: '240px', // Box height
                  borderRadius: '16px', // Rounded corners applied here
                  padding: '4px', // Padding inside the box to show the gradient border
                  boxSizing: 'border-box',
                  overflow: 'hidden', // Prevent image overflow outside the border
                }}
              >
                {/* Black Background Behind Gradient */}
                <div
                  className="absolute inset-0 z-10 h-[14.7rem] w-[14.7rem] mt-[2.4px] ml-[2.2px] bg-[#1a181c]"
                  style={{
                    // background: 'black', // Default black background inside box
                    borderRadius: '16px', // Apply same rounded corners
                  }}
                ></div>

                {/* Gradient Background */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'linear-gradient(135deg, #E283BD, #E2CF6C)', // Gradient applied here
                    borderRadius: '16px', // Apply same rounded corners
                  }}
                ></div>

                {/* Image container */}
                <div className="w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden relative z-20">
                  <Image
                    src={partner.image}
                    width={220}   // Image width
                    height={220}  // Image height
                    alt={partner.name}
                    className="object-cover rounded-xl"  // Rounded image
                    />
                </div>
              </div>
            ))}
          </div>
        </Marquee>

      {/*2nd design*/}
        <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden">
          <div className="flex">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-6 mt-12 z-10 flex flex-col items-center justify-center transition-all duration-300 relative"
                style={{
                  width: '240px',  // Box width
                  height: '240px', // Box height
                  borderRadius: '16px', // Small border radius
                  overflow: 'hidden', // Prevent image overflow outside the border
                  background: 'linear-gradient(to bottom, rgba(256, 131, 189, 0.6), rgba(256, 131, 189, 0) )', // Moves transparency upwards
                }}
              >
                {/* Black Background Behind Gradient */}
                <div
                          className="absolute inset-0 z-0 h-[14.7rem] w-[14.7rem] mt-[2.4px] ml-[2.2px] bg-[#1a181c]"
                          style={{
                            // background: 'black', // Default black background inside box
                            borderRadius: '16px', // Apply same rounded corners
                          }}
                        ></div>
                {/* Image container */}
                <div className="w-ful z-20 h-full flex flex-col items-center justify-center rounded-md overflow-hidden">
                  <Image
                    src={partner.image}
                    width={220}   // Image width
                    height={220}  // Image height
                    alt={partner.name}
                    className="object-cover rounded-xl"  // Rounded image
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>




      {/*3rd design*/}
        <Marquee gradient={false} speed={100} className="w-full py-8 overflow-hidden">
          <div className="flex">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-6 mt-12 flex flex-col items-center justify-center transition-all duration-300 relative"
                style={{
                  width: '240px',  // Box width
                  height: '240px', // Box height
                  borderRadius: '16px', // Rounded corners for the box
                  overflow: 'hidden', // Prevent content overflow
                  position: 'relative',
                  // background: 'linear-gradient(to bottom, rgba(256, 131, 189, 0.6), rgba(256, 131, 189, 0))', // Pink gradient
                }}
              >
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 z-20"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(226, 131, 189, 0.6)-60%, rgba(256, 131, 189, 0))', // Pink gradient overlay
                  }}
                ></div>

                {/* Image container */}
                <div className="w-full h-full flex flex-col items-center justify-center rounded-lg overflow-hidden relative z-10">
                  <Image
                    src={partner.image}
                    width={200}   // Image width
                    height={200}  // Image height
                    alt={partner.name}
                    className="object-cover rounded-lg"  // Rounded image
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>




      </div>
    </section>
  );
};

export default Partners;
