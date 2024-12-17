"use client";
import { useEffect } from 'react';
import Navbar from './navbar.jsx';

const MainContent = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
  
<Navbar />

<section id="hero" className="h-screen bg-custom-dark relative flex items-center justify-center">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  {/* <h1 className="text-6xl text-white font-bold relative z-10">Tink<span className="text-pink-500">HACK</span> 2.0</h1> */}
    <div className='relative flex'>
      <img className="brightness-125 absolute w-auto z-20" src="/images/TinkHackLogoI.svg" alt="Logo i" style={{left: '20.4rem'}}/>
      <img className="brightness-125 w-auto h-610 relative flex z-10" src="/images/TinkHackLogoMain.svg" alt="Tink Hack Logo" />
    </div>
</section>

<section id="about" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' ,transform: 'rotate(180deg) scaleX(-1)'}}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">About</h2>
</section>

<section id="tracks" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Tracks</h2>
</section>

<section id="timeline" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' ,transform: 'rotate(180deg) scaleX(-1)'}}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Timeline</h2>
</section>

<section id="prizes" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Prizes</h2>
</section>

<section id="sponsors" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' ,transform: 'rotate(180deg) scaleX(-1)'}}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Sponsors</h2>
</section>

<section id="faq" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">FAQ</h2>
</section>

<section id="contact" className="h-screen bg-custom-dark text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/frames/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' ,transform: 'rotate(180deg) scaleX(-1)'}}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Contact Us</h2>
</section>

    </>
  );
};

export default MainContent;
