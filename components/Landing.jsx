"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TinkHackLogo2 from "@/assets/logo2.png";
import dbiz from "@/assets/dbiz.png";
import LandingPageImage1 from "@/assets/landing_page_1.svg";
import LandingPageImage2 from "@/assets/landing_page_2.svg";
import LandingPageImage3 from "@/assets/landing_page_3.png";
import BrokenGlassImage1 from "@/assets/Broken_glass_1.svg";
import BrokenGlassImage2 from "@/assets/Broken_glass_2.svg";
import Link from "next/link";

const Landing = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="hero"
      className={`font-satoshi min-h-screen bg-custom-dark relative flex items-center justify-center bg-pattern`}
    >
      {/* <div className="h-[100vh]">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}
      <div className="flex w-full">
        <div className="z-10 flex items-center justify-center h-screen w-full">
          <div className="flex flex-col items-center justify-center gap-0 w-full relative">
            <motion.div
              className="relative"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <a
                href="https://dbiz.ai/"
                target="_blank"
                rel="noopener noreferrer"
                title="dbiz.ai"
                aria-label="dbiz.ai Website"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Image
                  className={`brightness-125 relative flex z-10 mx-auto transition-all duration-700 -mt-[52px] mb-[20px] 
                      sm:mt-[30px] sm:mb-[20px]
                      md:-mt-[10px] md:mb-[20px]
                      lg:mt-[60px] lg:mb-[20px]`}
                  src={dbiz}
                  alt="dbiz Logo"
                  layout="intrinsic"
                  priority
                  {...(typeof window !== "undefined" && window.innerWidth < 640
                    ? { height: 250, width: 70 }
                    : window.innerWidth < 768
                    ? { height: 300, width: 80 }
                    : window.innerWidth < 1024
                    ? { height: 350, width: 90 }
                    : { height: 100, width: 100 })}
                />
              </a>
            </motion.div>
            <motion.p
              className="font-MontserratBold text-center text-xs sm:text-base -my-2"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              presents
            </motion.p>
            <motion.div
              className="relative z-10"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1], 
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <Image
                className={`brightness-125 relative flex z-10 mx-auto transition-all duration-700 -mt-[20px]
                    sm:mb-[60px] sm:-mt-[60px]
                    md:mb-[20px] 
                    lg:mb-[20px]`}
                src={TinkHackLogo2}
                alt="Tink Hack Logo"
                layout="intrinsic"
                priority
                {...(typeof window !== "undefined" && window.innerWidth < 640
                  ? { height: 450, width: 230 }
                  : window.innerWidth < 768
                  ? { height: 300, width: 300 }
                  : window.innerWidth < 1024
                  ? { height: 350, width: 250 }
                  : { height: 100, width: 350 })}
              />
            </motion.div>

            <div className="absolute inset-x-0 w-full mx-auto flex justify-center z-[999] pt-[35rem] sm:pt-[30rem]">
              <motion.div
                className="flex flex-col justify-center items-center w-full mb-[210px] sm:mb-[40px] sm:-mx-12 md:mb-[-10px] md:-mx-8 lg:mx-2 z-[999] relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <div className="max-sm:scale-90 relative z-[999]">
                  <div
                    className="apply-button"
                    data-hackathon-slug="tinkhack-mec"
                    data-button-theme="dark-inverted"
                    style={{
                      height: "40px",
                      width: typeof window !== "undefined" && window.innerWidth < 640 ? "180px" : "250px",
                      position: "relative",
                      zIndex: 999
                    }}
                  ></div>
                </div>

                <div className="z-[999] relative">
                  <Link
                    href="https://countdown.tinkhack.tech"
                    rel="noopener noreferrer"
                    className="z-[999]"
                    priority
                  >
                   <button 
                    className="py-2 z-10 text-md sm:text-xl px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-[#1E1E1E] rounded-[30px] border border-[#E283BD] hover:border-[#E2CF6C] hover:shadow-lg transition-all hover:scale-105 mt-4 relative"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Check Timer
                  </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="brightness-125 absolute top-0 left-0 z-10 w-[400px] h-[150px]"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={LandingPageImage1}
            alt="Landing Page Corner Image"
            layout="intrinsic"
            priority
          />
        </motion.div>

        <motion.div
          className="brightness-125 absolute top-0 max-lg:hidden right-0 z-10 w-[450px] h-[380px]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            src={LandingPageImage2}
            alt="Landing Page Corner Image"
            layout="intrinsic"
          />
        </motion.div>

        <motion.div
          className="brightness-125 absolute bottom-0 z-[5]"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <Image
            src={BrokenGlassImage1}
            alt="Broken Glass Image"
            layout="intrinsic"
            className="w-[190px] h-[250px] mb-[-20px] ml-[10px] 
              sm:w-[210px] sm:h-[250px] sm:mb-[24px] sm:ml-[-30px] 
              md:w-[280px] md:h-[400px] md:mb-[-50px] md:ml-[-20px] 
              lg:w-[320px] lg:h-[500px] lg:mb-[-100px] lg:ml-[60px] z-[5]"
          />
        </motion.div>

        <motion.div
          className="brightness-125 absolute bottom-0 z-[5]"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <Image
            src={BrokenGlassImage2}
            alt="Broken Glass Image"
            layout="intrinsic"
            className="w-[80px] h-[250px] mb-[45px] ml-[80px] 
              sm:w-[80px] sm:h-[300px] sm:mb-[95px] sm:ml-[40px] 
              md:w-[100px] md:h-[400px] md:mb-[40px] md:ml-[90px] 
              lg:w-[150px] lg:h-[150px] lg:mb-[-10px] lg:ml-[160px] z-[5]"
          />
        </motion.div>
      </div>
      <motion.div
        className="brightness-125 absolute bottom-0 right-0 z-10 overflow-visible"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1.5,
          delay: 0.4,
        }}
      >
        <Image
          src={LandingPageImage3}
          alt="Landing Page Corner Image"
          layout="intrinsic"
          className="w-[250px] h-[250px] mb-[-110px] mr-[-80px] 
              sm:w-[300px] sm:h-[300px] sm:mb-[-200px] 
              md:w-[350px] md:h-[400px] md:mb-[-300px] 
              lg:w-[450px] lg:h-[500px] lg:mb-[-450px]"
        />
      </motion.div>
    </section>
  );
};

export default Landing;