import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-custom-dark text-white relative flex flex-col justify-between items-center"
      style={{ height: '40vh', padding: 'auto' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>

      {/* Footer Content */}
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
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text"
          >
            LinkedIn
          </Link>

          <Link
            href="https://instagram.com/tinkerhubmec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text"
          >
            Instagram
          </Link>

          <Link
            href="https://www.youtube.com/@TinkerHubMEC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text"
          >
            Youtube
          </Link>
        </div>
      </div>

      {/* TINKHACK */}
      <h2
        className="relative z-10 font-bold w-full text-center opacity-75"
        style={{
          position: 'relative',
          padding: '0.1rem 0',
          marginBottom: '-1rem', 
          transform: 'translateY(10%)',
          WebkitTextStrokeWidth: '7px',
          WebkitTextStrokeColor: 'transparent',
          backgroundImage: 'linear-gradient(to bottom, #ff7eb9, #ffdf7f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: '#1c1c21',
          backgroundClip: 'text',
          backgroundOrigin: 'border-box',
          fontSize: 'clamp(3rem, 18vw, 15rem)', 
          lineHeight: '1',
        }}
      >
        TINKHACK
      </h2>
    </section>
  );
};

export default Footer;
