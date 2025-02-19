"use client"
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import BackgroundImage from "@/assets/background.svg";

const Footer = () => {


  
    const [strokeWidth, setStrokeWidth] = useState("7px");
  
    useEffect(() => {
      const updateStrokeWidth = () => {
        setStrokeWidth(window.innerWidth < 640 ? "5px" : "7px");
      };
  
      updateStrokeWidth(); // Initial check
      window.addEventListener("resize", updateStrokeWidth);
  
      return () => window.removeEventListener("resize", updateStrokeWidth);
    }, []);
  
  return (
    <section
    id="footer"
    className="bg-custom-dark text-white relative flex bg-pattern  flex-col justify-between items-center -px-2 overflow-hidden font-satoshi"
    style={{
      paddingTop: "clamp(1rem, 10vw, 5rem)",
      maxHeight: "clamp(20px, 45vh, 365px)", // Default maxHeight
    }}
  >
    {/* Mobile-specific maxHeight */}
    <div className="sm:max-h-[clamp(20px,45vh,130px)]  md:max-h-[clamp(20px,45vh,185px)] lg:md:max-h-[clamp(20px,45vh,300px)] xl:max-h-[clamp(20px,45vh,365px)] max-h-[clamp(20px,45vh,90px)]">
      {/* Background Image */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
  
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center px-8 mb-4 text-gray-400">
        {/* Footer Text and Social Links */}
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-sm text-left hidden md:block">
            TinkerHub MEC — Don't steal our work. We'll find you.
          </p>
          <p className="text-sm text-left -pl-1 md:hidden">TinkerHub MEC</p>
          <div className="flex flex-row space-x-6 -pr-1 sm:space-x-4">
            <Link
              href="https://www.linkedin.com/company/tinkerhub-mec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:text-white hover:bg-clip-text md:hidden"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://instagram.com/tinkerhubmec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:text-white hover:bg-clip-text md:hidden"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@TinkerHubMEC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:text-white hover:bg-clip-text md:hidden"
            >
              <FaYoutube size={20} />
            </Link>
            {/* Links for larger screens */}
            <Link
              href="https://www.linkedin.com/company/tinkerhub-mec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text hidden md:block"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/tinkerhubmec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text hidden md:block"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@TinkerHubMEC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text hidden md:block"
            >
              Youtube
            </Link>
          </div>
        </div>
      </div>
  
      {/* TINKHACK */}
      <h2
        className="relative z-10 font-khuja font-bold w-full text-center opacity-40 sm:opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-[#E283BD] to-[#E2CF6C]"
        style={{
          WebkitTextStrokeWidth: strokeWidth,        
          WebkitTextFillColor: "#241F23",
          fontSize: "clamp(0.5rem, 15vw, 280px)",
        }}
      >
        TINKHACK
      </h2>
    </div>
  </section>
  

  );
};

export default Footer;