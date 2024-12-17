// components/Navbar.jsx
import React from 'react';
import localFont from 'next/font/local';

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
        <img className="w-45 h-12 ml-0 " src="/images/ClubLogo.png" alt="" />
      </div>
      <div className={`${satoshi.variable} container ml-[13%] flex justify-evenly items-center bg-[#2A282B] rounded-3xl w-[50%] font-satoshi`}>
        <ul className="flex space-x-11">
          {/* <li><a href="#hero" className="hover:text-pink-500">Home</a></li> */}
          <li className='flex-1 text-center'><a href="#about" className="hover:text-pink-500 ">About</a></li>
          <li className='flex-1 text-center'><a href="#tracks" className="hover:text-pink-500">Tracks</a></li>
          <li className='flex-1 text-center'><a href="#timeline" className="hover:text-pink-500">Timeline</a></li>
          <li className='flex-1 text-center'><a href="#prizes" className="hover:text-pink-500">Prizes</a></li>
          <li className='flex-1 text-center'><a href="#sponsors" className="hover:text-pink-500">Sponsors</a></li>
          <li className='flex-1 text-center'><a href="#faq" className="hover:text-pink-500">FAQ</a></li>
          {/* <li><a href="#contact" className="hover:text-pink-500">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
