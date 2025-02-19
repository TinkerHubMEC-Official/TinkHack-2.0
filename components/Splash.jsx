"use client";
import React, { useEffect, useState } from "react";

const fonts = [
  "font-satoshi",
  "font-productsansregular",
  "font-latohairline",
  "font-sans-serif",
  "font-candycolouredclown",
  "font-khuja",
];

const SplashScreen = ({ onFinish }) => {
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [currentSize, setCurrentSize] = useState(4);
  const [fadeOut, setFadeOut] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine responsive font size based on window width
  const getResponsiveFontSize = () => {
    if (windowWidth >= 1200) {
      return `${currentSize}em`; // Desktop size
    } else if (windowWidth >= 768) {
      return `${currentSize * 0.7}em`; // Tablet size
    } else {
      return `${currentSize * 0.4}em`; // Mobile size
    }
  };

  useEffect(() => {
    const fontChangeInterval = setInterval(() => {
      setCurrentFont((prevFont) => {
        const currentIndex = fonts.indexOf(prevFont);
        const nextIndex = (currentIndex + 1) % fonts.length;
        return fonts[nextIndex];
      });
    }, 100);

    const fontSizeChangeInterval = setInterval(() => {
      setCurrentSize((prevSize) => prevSize + 1);
    }, 800);

    const splashDuration = 3000;
    const fadeDuration = 1000;

    setTimeout(() => {
      setFadeOut(true);
    }, splashDuration);

    setTimeout(() => {
      onFinish();
    }, splashDuration + fadeDuration);

    return () => {
      clearInterval(fontChangeInterval);
      clearInterval(fontSizeChangeInterval);
    };
  }, [onFinish]);

  return (
    <div
      className={`splash-screen fixed top-0 left-0 w-full h-full z-50 bg-[#1a181c] bg-pattern flex justify-center items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent ">
        <h1
          className={`font-bold ${currentFont} text-4xl`}
          style={{
            animation: "pulse 1.5s infinite",
            fontSize: getResponsiveFontSize(),
          }}
        >
          TinkerHub MEC
        </h1>
        <h2
          className="
            mt-4 font-semibold text-xl italic sm:text-3xl bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1.5
          "
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        >
          presents . . .
        </h2>
      </div>
    </div>
  );
};

export default SplashScreen;
