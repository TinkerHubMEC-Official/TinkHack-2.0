"use client";
import { useEffect } from 'react';
import Navbar from './navbar.jsx';

const MainContent = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      {/* Navbar
      <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TinkerHub MEC</div>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-pink-500">Home</a></li>
            <li><a href="#about" className="hover:text-pink-500">About</a></li>
            <li><a href="#tracks" className="hover:text-pink-500">Tracks</a></li>
            <li><a href="#timeline" className="hover:text-pink-500">Timeline</a></li>
            <li><a href="#prizes" className="hover:text-pink-500">Prizes</a></li>
            <li><a href="#sponsors" className="hover:text-pink-500">Sponsors</a></li>
            <li><a href="#faq" className="hover:text-pink-500">FAQ</a></li>
            <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
          </ul>
        </div>
      </nav> */}

<Navbar />

<section id="hero" className="h-screen relative flex items-center justify-center">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h1 className="text-6xl text-white font-bold relative z-10">Tink<span className="text-pink-500">HACK</span> 2.0</h1>
</section>

<section id="about" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">About</h2>
</section>

<section id="tracks" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Tracks</h2>
</section>

<section id="timeline" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Timeline</h2>
</section>

<section id="prizes" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Prizes</h2>
</section>

<section id="sponsors" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Sponsors</h2>
</section>

<section id="faq" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">FAQ</h2>
</section>

<section id="contact" className="h-screen text-white flex items-center justify-center relative">
  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/Frame-1.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-custom-dark opacity-50"></div> {/* Overlay for readability */}
  <h2 className="text-4xl font-bold relative z-10">Contact Us</h2>
</section>

    </>
  );
};

export default MainContent;
