"use client"

import { useState, useEffect } from "react";

import {
  SplashScreen,
  Navbar,
  Landing,
  About,
  Contact,
  Faq,
  Sponsors,
  Prizes,
  Timeline,
  Tracks,
  Footer,
  Partners
} from "../components";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="overflow-hidden">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      {!showSplash && (
        <>
          <Navbar className="absolute top-0 left-0 w-full z-50" />
          <Landing />
          <About />
          <Tracks />
          <Timeline />
          <Prizes />
          <Sponsors />
          <Partners />
          <Faq />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}