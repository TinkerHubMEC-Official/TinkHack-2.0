// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
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
    </nav>
  );
}

export default Navbar;
