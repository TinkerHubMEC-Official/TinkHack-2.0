"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners
// import { grid } from "ldrs"; // Import the grid loader from ldrs

// // Register the grid loader
// grid.register();
import TinkHackLogoMain from "../app/TinkHackLogo.png"
import dbiz from '@/assets/dbiz.png';



import BackgroundImage from "@/assets/bckg 2.png";
import LandingPageImage1 from "@/assets/landing_page_1.svg";
import LandingPageImage2 from "@/assets/landing_page_2.svg";
import LandingPageImage3 from "@/assets/landing_page_3.svg";
import BrokenGlassImage1 from "@/assets/Broken_glass_1.svg";
import BrokenGlassImage2 from "@/assets/Broken_glass_2.svg";
import img1 from "@/assets/2.0.png";
import img from "@/assets/2.0.1.png";
import i from "@/assets/original_i_kuthu.png";
import Link from "next/link";

const Landing = () => {
  return (
    <section
      id="hero"
      className={`font-satoshi min-h-screen bg-custom-dark relative flex items-center justify-center bg-pattern 
         `}
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
            {/* Tink */}
            {/* <motion.h1
              className="filter blur-[0.5px] font-productsansbold font-bold text-center 
              text-[5rem] -mt-40 
              sm:text-[6rem] sm:pt-6 
              md:text-[8.5rem] 
              lg:text-[9rem] lg:-mt-14 
              relative"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1], // Keyframe animation for scale
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              style={{ textShadow: '0 -2px 2px rgba(255, 105, 180, 0.4)' }}
            >
              T
              <span className="relative inline-block">
                i
                <Image
                  src={i}
                  alt="Dot Image"
                  className="absolute filter -blur-[8px] 
                  top-[27px] left-[0.7vw] w-[1rem] h-[18px] 
                  sm:top-[1.8rem] sm:left-[0.2px] sm:w-[2rem] sm:h-[1.8rem] 
                  md:w-[9rem] md:h-[3rem] md:top-[2.1rem] md:left-[0.0rem] 
                  lg:top-[2.65rem] lg:left-[0.5px] lg:w-[38px] lg:h-[42px] lg:pl-0.5 
                  rounded-3xl"
                />
              </span>
              nk
              2.0 Image animation 
              <motion.div
                className="absolute filter -blur-[8px] 
                -top-[0.4rem] left-[35%] w-[4.5rem] h-[5rem] 
                sm:top-[0.7rem] sm:left-[34%] sm:w-[6rem] sm:h-[6.5rem] 
                md:top-[0.5rem] md:left-[34%] md:w-[8.5rem] md:h-[9rem] 
                lg:w-[9rem] lg:h-[9.7rem] lg:top-[0.3rem] lg:left-[34%]"
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{
                  scale: [0, 1.3, 0.95, 1.2, 1],
                  opacity: [0, 1]
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                {/* <Image 
                  src={img} 
                  alt="2.0 Image" 
                  className="w-full h-full brightness-150" 
                  priority
                /> 
              </motion.div>
            </motion.h1>

             HACK 
            <motion.div
              className="relative"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1], // Keyframe animation for scale
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
             <h1 className="relative z-10 blur-[0.1px] sm:blur-[0.2px] font-khuja  font-medium text-center 
             text-[3.2rem] -mt-5 pl-1 
             sm:text-[4rem] sm:-mt-8 sm:pl-3 
             md:text-[6rem] md:-mt-11 md:pl-4 md:opacity-90
             lg:text-[6rem] leading-none scale-y-[1.2] lg:-mt-12 lg:pl-6 
             bg-gradient-to-br from-[#f3f302] via-[#e23be6] to-[#0000ff] text-transparent bg-clip-text">
              <span className="relative inline-block">
                <span className="absolute -z-10 text-transparent bg-clip-text bg-gradient-to-br from-[#f3f302] via-[#e23be6] to-[#0000ff] 
                text-[3.2rem] top-0 left-0
                sm:text-[4rem] 
                md:text-[6rem] 
                lg:text-[6.05rem] lg:-left-1 blur-[0.6px] md:blur-[1px] lg:-top-0.5" 
                style={{
                  transform: 'translateX(3px) translateY(1px) scale(0.999)',
                }}>
                  HACK
                </span>
                <span className="relative">HACK</span>
              </span>
            </h1>

            </motion.div> */}

<motion.div
              className="relative"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1], // Keyframe animation for scale
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
              className={`brightness-125 relative flex z-10 mx-auto transition-all duration-700 mt-[10px] mb-[10px] 
                sm:mt-[30px] 
                md:-mt-[10px] 
                lg:mt-[-40px]`}
              src={dbiz}
              alt="Tink Hack Logo"
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



           {/* Main Logo Image */}
           <motion.div
              className="relative"
              initial={{ scale: 1.3, y: 50, opacity: 0 }}
              animate={{
                y: 0,
                scale: [1.3, 0.95, 1.2, 1], // Keyframe animation for scale
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
            <Image
              className={`brightness-125 relative flex z-10 mx-auto transition-all duration-700 mb-[170px] 
                sm:mb-[60px] 
                md:mb-[20px] 
                lg:mb-[-80px]`}
              src={TinkHackLogoMain}
              alt="Tink Hack Logo"
              layout="intrinsic"
             
  priority
  {...(typeof window !== "undefined" && window.innerWidth < 640
    ? { height: 250, width: 170 }
    : window.innerWidth < 768
    ? { height: 300, width: 300 }
    : window.innerWidth < 1024
    ? { height: 350, width: 250 }
    : { height: 100, width: 300 })}
 />
          
          </motion.div>

      

                                        {/* <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#172ee7] lg:pl-[0.2rem] lg:pt-[0.8rem]
                                                    font-semibold text-7xl font-candycolouredclown blurred-text" 
                                        
                                        >
                                          2
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#172ee7] lg:pl-[2.14rem] lg:-mt-[0.65rem]
                                                    font-semibold text-8xl font-candycolouredclown" 
                                        
                                        >
                                          .
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#172ee7] lg:pl-[3rem] lg:pt-3
                                                    font-bold text-7xl font-candycolouredclown" 
                                        
                                        >
                                          0
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#E2CF6C] lg:pl-2 lg:pt-7
                                                    font-semibold text-5xl font-candycolouredclown" 

                                        >
                                          2
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#E2CF6C] lg:pl-[2.3rem] lg:pt-[1.9rem]
                                                    font-semibold text-5xl font-candycolouredclown" 

                                        >
                                          .
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#E2CF6C] lg:pl-[3.3rem] lg:pt-7
                                                    font-bold text-5xl font-candycolouredclown" 

                                        >
                                          0
                                        </h1>
                                        <h1
                                          className="absolute top-[0.2rem] left-[40%] sm:top-[2.1rem] sm:left-[42%] md:top-[1.3rem] md:left-[41%] lg:top-[1.4rem] lg:left-[45%] 
                                                    text-[#c964c6] lg:pl-1.5 lg:pt-5
                                                    font-extrabold text-6xl font-candycolouredclown" 
                                                                    // style={{
                                                                    //   textShadow: `
                                                                    //     0 0 10px #c964c6, 
                                                                    //     0 0 15px #c964c6, 
                                                                    //     0 0 20px #c964c6, 
                                                                    //     0 0 30px #172ee7, 
                                                                    //     0 0 35px #172ee7, 
                                                                    //     0 0 40px #172ee7, 
                                                                    //     0 0 45px #172ee7`
                                                                    // }}
                                        >
                                          2.0
                                        </h1> */}

 
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
              priority
            />
          </motion.div>

          <motion.div
            className="brightness-125 absolute bottom-0 right-0 z-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1.5,
              delay: 0.4
            }}
          >
            <Image
              src={LandingPageImage3}
              alt="Landing Page Corner Image"
              layout="intrinsic"
              className="w-[250px] h-[250px] mb-[-120px] mr-[-10px] 
              sm:w-[300px] sm:h-[300px] sm:mb-[-200px] 
              md:w-[350px] md:h-[400px] md:mb-[-300px] 
              lg:w-[450px] lg:h-[500px] lg:mb-[-620px]"
              priority
            />
          </motion.div>

          {/* Broken Glass Images */}
          <motion.div
            className="brightness-125 absolute bottom-0 z-50"
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
              lg:w-[320px] lg:h-[500px] lg:mb-[-100px] lg:ml-[60px]"
              priority
            />
          </motion.div>

          <motion.div
            className="brightness-125 absolute bottom-0 z-50"
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
              lg:w-[150px] lg:h-[150px] lg:mb-[-10px] lg:ml-[160px]"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute flex justify-center items-center w-full bottom-[10%] z-10 mb-[210px] sm:mb-[40px] sm:-mx-12 md:mb-[-10px] md:-mx-8 lg:mx-2"
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
            <Link
              href="https://mec.tinkerhub.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <button className="py-1.5 text-md sm:text-xl px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-[#1E1E1E] rounded-[30px] border-[1px] border-[#E283BD] hover:border-[#E2CF6C] hover:shadow-lg transition-all hover:scale-105">
                Register Now
              </button> */}
            </Link>
          </motion.div>
        
      </div>
    </section>
  );
};

export default Landing;