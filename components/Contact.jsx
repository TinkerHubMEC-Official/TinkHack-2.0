"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import phoneIcon from '@/assets/phone.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import emailIcon from '@/assets/email.svg';
import aaron from '@/assets/aaron.png';
import annrose from '@/assets/annrose.png';
import anjali from '@/assets/anjali.png';
import eshaan from '@/assets/eshaan.png';
import midhun from '@/assets/midhun.png';
import theertha from '@/assets/theertha.png';
import pranav from '@/assets/pranav.jpg';

import BackgroundImage from '@/assets/background.svg';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../app/globals.css';

const Contact = () => {
  const contacts = [
    { 
      name: 'Ann Rose', 
      role: 'Campus Lead', 
      photo: annrose, 
      linkedin: 'https://www.linkedin.com/in/ann-rose-256808259/', 
      email: 'mailto:annrosebiju.mec@gmail.com', 
      phone: 'tel:+918547498719' 
    },
    { 
      name: 'Aaron', 
      role: 'Co-Lead', 
      photo: aaron, 
      linkedin: 'https://www.linkedin.com/in/aarongeorgeabraham/', 
      email: 'mailto:aaroongeorge2005@gmail.com', 
      phone: 'tel:+919539753798' 
    },
    { 
      name: 'Eshaan', 
      role: 'Outreach Lead', 
      photo: eshaan, 
      linkedin: 'https://linkedin.com/in/eshaan-abdulkalam/', 
      email: 'mailto:eshaanmanath@gmail.com', 
      phone: 'tel:+918590691991' 
    },
    { 
      name: 'Pranav', 
      role: 'Tech Lead', 
      photo: pranav, 
      linkedin: 'https://www.linkedin.com/in/pranav072/', 
      email: 'mailto:pranavm265@gmail.com', 
      phone: 'tel:+919567858032' 
    }, 
    {
      name: 'Midhun', 
      role: 'TinkTank Lead', 
      photo: midhun, 
      linkedin: 'https://www.linkedin.com/in/midhun-unni/', 
      email: 'mailto:midhununni457@gmail.com', 
      phone: 'tel:+918848253367' 
    },
    { 
      name: 'Theertha', 
      role: 'WIT Lead', 
      photo: theertha, 
      linkedin: 'https://www.linkedin.com/in/theertha-avinash/', 
      email: 'mailto:theerthaavnsh@gmail.com', 
      phone: 'tel:+919400882017' 
    },
    { 
      name: 'Anjali', 
      role: 'Co-Lead', 
      photo: anjali, 
      linkedin: 'https://www.linkedin.com/in/anjali-krishna-3a7488330/', 
      email: 'mailto:anjalikrishna867@gmail.com', 
      phone: 'tel:+917306961522' 
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1175, settings: { slidesToShow: 4.5 } }, 
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 960, settings: { slidesToShow: 3 } }, 
      { breakpoint: 768, settings: { slidesToShow: 2.75 } },
      { breakpoint: 640, settings: { slidesToShow: 2.5 } },
      { breakpoint: 595, settings: { slidesToShow: 2 } }, 
      { breakpoint: 446, settings: { slidesToShow: 1.75 } }, 
      { breakpoint: 370, settings: { slidesToShow: 1.5 } },
      { breakpoint: 319, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="contact" className="max-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-8 font-satoshi -mt-14 lg:pt-16">
      <h2 className="text-5xl font-bold relative z-10 text-center 
      bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
      mb-14 sm:text-center md:text-center lg:text-left lg:mr-[65%]
      after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
      after:transform after:-translate-x-1/2 after:bottom-[-10px]
      after:left-0 after:translate-x-0 after:w-[85px]
      md:after:left-0 md:after:translate-x-0 md:after:w-[85px]
      lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
      data-aos="fade-up"
      data-aos-delay="100"
      >
        Contact Us
      </h2>
      {/* Background Image */}
      <div>
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-full max-w-6xl ">
        <Slider {...settings} className="-mx-2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#2f2f33] to-[#272529] shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-3xl text-center min-w-[180px] max-w-[190px] py-7 mx-2"
              data-aos="fade-up"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <Image src={contact.photo} alt="Profile" width={96} height={96} />
              </div>
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-sm text-gray-400">{contact.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={contact.email} target="_blank" rel="noopener noreferrer" className="group">
                  <Image
                    src={emailIcon}
                    alt="Email"
                    width={24}
                    height={24}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
                <a href={contact.phone} target="_blank" rel="noopener noreferrer" className="group">
                  <Image
                    src={phoneIcon}
                    alt="Phone"
                    width={24}
                    height={24}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Contact;
