import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/assets/background.svg";
const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-custom-dark text-white relative flex flex-col justify-between items-center px-4 overflow-hidden font-satoshi"
      style={{
        paddingTop: "clamp(1rem, 10vw, 5rem)",
        maxHeight: "clamp(120px, 45vh, 365px)",
      }}
    >
      {/* Background Image */}
      <div>
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center px-8 mb-4 text-gray-400">
        {/* Footer Text */}
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          TinkerHub MEC — Don't steal our work. We'll find you.
        </p>

        {/* Social Links */}
        <div className="flex flex-row space-x-6">
          <Link
            href="https://www.linkedin.com/company/tinkerhub-mec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text"
          >
            LinkedIn
          </Link>

          <Link
            href="https://instagram.com/tinkerhubmec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text"
          >
            Instagram
          </Link>

          <Link
            href="https://www.youtube.com/@TinkerHubMEC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#E283BD] hover:to-[#E2CF6C] hover:bg-clip-text"
          >
            Youtube
          </Link>
        </div>
      </div>

      {/* TINKHACK */}
      <h2
        className="relative z-10 font-khuja font-bold w-full text-center opacity-75 text-transparent bg-clip-text bg-gradient-to-r from-[#E283BD] to-[#E2CF6C]"
        style={{
          WebkitTextStrokeWidth: "7px",
          WebkitTextFillColor: "#241F23",
          fontSize: "clamp(2rem, 15vw, 280px)",
        }}
      >
        TINKHACK
      </h2>
    </section>
  );
};

export default Footer;
