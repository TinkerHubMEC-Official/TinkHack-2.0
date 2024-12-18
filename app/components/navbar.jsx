import React from 'react';
import localFont from 'next/font/local';
import Link from 'next/link'; // Import the Link component

const satoshi = localFont({
  src: [{
    path: "../../public/fonts/Satoshi-Variable.ttf",
    weight: "500"
  }],
  variable: "--font-satoshi"
});

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-transparent text-white p-4 z-50 flex">
      <div className="left-0">
        <img className="w-45 h-12 ml-0 " src="/images/ClubLogo.png" alt="Logo" />
      </div>
      <div className={`${satoshi.variable} container ml-[13%] flex justify-evenly items-center bg-[#2A282B] rounded-3xl w-[50%] font-satoshi`}>
        <ul className="flex space-x-11">
          <li className='flex-1 text-center'>
            <Link
              href="#about" // Use the Link component and specify the href
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              About
            </Link>
          </li>
          <li className='flex-1 text-center'>
            <Link
              href="#tracks"
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              Tracks
            </Link>
          </li>
          <li className='flex-1 text-center'>
            <Link
              href="#timeline"
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              Timeline
            </Link>
          </li>
          <li className='flex-1 text-center'>
            <Link
              href="#prizes"
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              Prizes
            </Link>
          </li>
          <li className='flex-1 text-center'>
            <Link
              href="#sponsors"
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              Sponsors
            </Link>
          </li>
          <li className='flex-1 text-center'>
            <Link
              href="#faq"
              className="hover:bg-gradient-to-r hover:from-[#ff7eb9] hover:to-[#ffdf7f] hover:bg-clip-text hover:text-transparent"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
