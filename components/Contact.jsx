"use client";
import Image from 'next/image';
import Slider from 'react-slick';

// Import assets
import phoneIcon from '@/assets/phone.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import emailIcon from '@/assets/email.svg';
import profileImage from '@/assets/aroon.jpg';
import aaron from '@/assets/aaroon.jpg';
import BackgroundImage from '@/assets/background.svg';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
// Tailwind style overrides for the slider's dots
import '../app/globals.css';

const Contact = () => {
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
      role: 'Speaker&Workshop Head', 
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
      { breakpoint: 360, settings: { slidesToShow: 1.5 } }
    ]
  };

  return (
    <section id="contact" className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-8 font-satoshi">
      <h2 className="text-5xl font-bold relative z-10 text-center 
      bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
      mb-20 sm:text-center md:text-center lg:text-left lg:mr-[65%]
      after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
      after:transform after:-translate-x-1/2 after:bottom-[-10px]
      after:left-0 after:translate-x-0 after:w-[85px]
      md:after:left-0 md:after:translate-x-0 md:after:w-[85px]
      lg:after:left-0 lg:after:translate-x-0 lg:after:w-[85px]"
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

      <div className="w-full max-w-6xl">
        <Slider {...settings} className="-mx-2">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-gradient-to-b from-[#2f2f33] to-[#272529] shadow-lg hover:scale-105 transition-all duration-300 p-4 rounded-3xl text-center min-w-[180px] max-w-[190px] py-7 mx-2">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <Image src={contact.photo} alt="Profile" width={96} height={96} />
              </div>
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-sm text-gray-400">{contact.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={contact.email}>
                  <Image src={emailIcon} alt="Email" width={24} height={24} />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
                </a>
                <a href={contact.phone}>
                  <Image src={phoneIcon} alt="Phone" width={24} height={24} />
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
