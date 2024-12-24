"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import BackgroundImage from '@/assets/background.svg';
import phoneIcon from '@/assets/phone.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import emailIcon from '@/assets/email.svg';
import profileImage from '@/assets/aroon.jpg';
import aaron from '@/assets/aaroon.jpg';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosPerDot, setPhotosPerDot] = useState(4); // Default to 4, but will adjust on resize
  const containerRef = useRef(null);

  const contacts = [
    { 
      name: 'Ann Rose', 
      role: 'Campus Lead', 
      photo: profileImage, 
      linkedin: 'https://www.linkedin.com/in/ann-rose-256808259/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+918547498719' 
    },
    { 
      name: 'Aaron', 
      role: 'Co-Lead', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/aarongeorgeabraham/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919539753798' 
    },
    { 
      name: 'Eshaan', 
      role: 'Outreach Lead', 
      photo: profileImage, 
      linkedin: 'https://linkedin.com/in/eshaan-abdulkalam/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+918590691991' 
    },
    { 
      name: 'Theertha', 
      role: 'WIT Lead', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/theertha-avinash/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919400882017' 
    },
    { 
      name: 'Pranav', 
      role: 'Tech Lead', 
      photo: profileImage, 
      linkedin: 'https://www.linkedin.com/in/pranav072/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919567858032' 
    },
    { 
      name: 'Midhun', 
      role: 'TinkTank Lead', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/midhun-unni/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+918848253367' 
    },
    { 
      name: 'Arjun', 
      role: 'Design Lead', 
      photo: profileImage, 
      linkedin: 'https://www.linkedin.com/in/arjun-shankar-ps-215b6026a/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919746388124' 
    },
    { 
      name: 'Drishya', 
      role: 'Speaker & Workshop Head', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/drishyaajith/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+918848388271' 
    },
    { 
      name: 'Jahfar', 
      role: 'Media & Publicity Lead', 
      photo: profileImage, 
      linkedin: 'https://www.linkedin.com/in/jahfar-jamal-960942300/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919746694031' 
    },
    { 
      name: 'Sruthi', 
      role: 'Documentation Head', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/sruthi-m-b-a78875280/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+918593036337' 
    },
    { 
      name: 'Martin', 
      role: 'Program Facilitator', 
      photo: profileImage, 
      linkedin: 'https://www.linkedin.com/in/martin-joseph-46789a25a/', 
      email: 'mailto:aaronkurianabraham@gmail.com', 
      phone: 'tel:+919496686241' 
    }
  ];
  

  const contactWidth = 280; 
  const calculatePhotosPerDot = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      return 4; // For large screens, show 4 cards per page
    } else if (screenWidth >= 768) {
      return 3; // For tablets, show 3 cards per page
    } else if (screenWidth >= 480) {
      return 2; // For smaller tablets, show 2 cards per page
    } else {
      return 1; // For mobile, show 1 card per page
    }
  };

  useEffect(() => {
    // Calculate the number of items per dot based on the screen size
    setPhotosPerDot(calculatePhotosPerDot());

    const handleResize = () => {
      setPhotosPerDot(calculatePhotosPerDot());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalDots = Math.ceil(contacts.length / photosPerDot); // Total dots based on the number of cards and max cards per dot

  const scrollHandler = (direction) => {
    const container = containerRef.current;
    if (direction === 'left') {
      container.scrollBy({ left: -contactWidth * photosPerDot, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: contactWidth * photosPerDot, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const index = Math.floor(container.scrollLeft / (contactWidth * photosPerDot));
    setCurrentIndex(index);
  };

  const handleDotClick = (index) => {
    const container = containerRef.current;
    const scrollOffset = index * contactWidth * photosPerDot; // Calculate exact position
    container.scrollTo({
      left: Math.round(scrollOffset), // Use Math.round to avoid fractional offsets
      behavior: 'smooth',
    });
    setCurrentIndex(index); // Update the current index after scrolling
  };
  

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const index = Math.floor(container.scrollLeft / (contactWidth * photosPerDot));
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [photosPerDot]);

  return (
<section 
  id="contact" 
  className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative 
  p-24 md:p-16 sm:p-8 xs:p-4 [@media(max-width:400px)]:p-0"
>


      <div >
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h2 className="text-5xl font-bold relative z-10 text-center 
  bg-gradient-to-r from-[#E283BD] via-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
  mb-8 sm:text-center md:text-center lg:text-left lg:mr-[65%]
  after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
  after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-10px]
  lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
>
  Contact Us
</h2>


      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory space-x-8 p-6 w-full h-full no-scrollbar" 
          onScroll={handleScroll}
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', overflowY: 'hidden' }}
        >
          {contacts.map((contact, index) => (
            <div key={index} className="bg-gradient-to-b from-[#2f2f33] to-[#272529] shadow-lg hover:shadow-sm hover:scale-105 transition-all duration-300 p-6 rounded-3xl text-center shadow-lg min-w-[220px] snap-start py-9" style={{ width: `calc(25vw)` }}> {/* Card width adjusted to 25vw */}
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden"> 
                <Image src={contact.photo} alt="Profile" width={96} height={96} />
              </div>
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-sm text-gray-400">{contact.role}</p>
              <div className="flex justify-center gap-6 mt-4">
                <a href={contact.email}>
                  <Image src={emailIcon} alt="Email" width={24} height={24} />
                </a>
                <a href={contact.linkedin}>
                  <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
                </a>
                <a href={contact.phone}>
                  <Image src={phoneIcon} alt="Phone" width={24} height={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-2">
          <button onClick={() => scrollHandler('left')} className="text-white p-1 rounded-full ml-[-4rem]">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button onClick={() => scrollHandler('right')} className="text-white p-1 rounded-full mr-[-4rem]">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex space-x-2 mt-4">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => handleDotClick(index)}
            >
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
