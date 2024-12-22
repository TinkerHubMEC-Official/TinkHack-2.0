import React from 'react';
import Image from 'next/image';
import FrameImage from '@/assets/Frame-1.svg'; 
import LandingPageImage1 from '@/assets/landing_page_1.svg'; 
import LandingPageImage2 from '@/assets/landing_page_2.svg'; 
import LandingPageImage3 from '@/assets/landing_page_3.svg';
import BrokenGlassImage1 from '@/assets/Broken_glass_1.svg'; 
import BrokenGlassImage2 from '@/assets/Broken_glass_2.svg'; 
import TinkHackLogoMain from '@/assets/TinkHackLogoMain.svg'; 

const Landing = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-custom-dark relative flex items-center justify-center"
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
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <div className="container flex w-full">
        {/* New Image for the Upper-Left Corner */}
        <Image
          className="brightness-125 absolute top-0 left-0 z-10 w-[400px] h-[150px]"
          src={LandingPageImage1}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/* New Image for the Upper-Right Corner */}
        <Image
          className="brightness-125 absolute top-0 max-lg:hidden right-0 z-10 w-[450px] h-[380px]"
          src={LandingPageImage2}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/* New Image for the Lower-Right Corner */}
        <Image
          className="brightness-125 absolute bottom-0 right-0 z-10 w-[450px] h-[500px] mb-[-620px] mr-[-22px]"
          src={LandingPageImage3}
          alt="Landing Page Corner Image"
          layout="intrinsic"
        />
        {/*Broken glass image*/}
        <Image
          className="brightness-125 absolute bottom-0 left-12 z-50 w-[350px] h-[500px] mb-[-170px]"
          src={BrokenGlassImage1}
          alt="Broken Glass Image"
          layout="intrinsic"
        />
        <Image
          className="brightness-125 absolute bottom-0 left-0 z-50 w-[150px] h-[150px] mb-[-78px] ml-[159px]"
          src={BrokenGlassImage2}
          alt="Broken Glass Image"
          layout="intrinsic"
        />
        
        {/* Main Logo Image */}
        <Image
          className="brightness-125 w-auto h-[610px] relative flex z-10 mx-auto pt-[8rem]"
          src={TinkHackLogoMain}
          alt="Tink Hack Logo"
          layout="intrinsic"
        />
      </div>
    </section>
  );
};

export default Landing;
