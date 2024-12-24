import Image from 'next/image';
import TinkerHubLogo from '@/assets/TinkerHubLogo.svg';
import TinkHackLogo from '@/assets/TinkHackLogoMain.svg';
import BubbleImage from '@/assets/Bubble.svg';
import BackgroundImage from '@/assets/background.svg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-8 font-satoshi"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={BackgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4">
        {/* First Block */}
        <div className="flex flex-col md:flex-row items-center mb-12 text-center md:text-left md:pl-8">
          {/* Title */}
          <h2 className="text-5xl font-bold relative z-10 text-center pl-4
  bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent 
  mb-32 md:text-center md:mt-0 md:top-0
  md:ml-[-5%] after:content-[''] after:absolute after:h-[5px] after:w-[100px] after:bg-white 
  after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-10px]
  lg:after:right-0 lg:after:translate-x-0 lg:after:w-[70px]">
            About
          </h2>
          <p className="text-2xl font-semibold leading-relaxed mb-8 max-w-[800px] pl-2 md:pl-32">
            TinkerHub MEC's overnight Hackathon, Kerala's inaugural AI-based event, promotes student expertise and explores Generative AI. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.
          </p>
        </div>

        {/* Second Block */}
<div className="flex flex-col md:flex-row items-center text-center md:text-left md:pl-8 md:relative md:left-[-8%] lg:left-[-7%] xl:left-[0%] pl-4">
  <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-[-5%] pr-[5%] transform -rotate-6 hidden md:block">
    <Image
      src={TinkHackLogo}
      alt="TinkHack Logo"
      width={300}
      height={300}
    />
  </div>
  <p className="text-2xl font-semibold leading-relaxed max-w-[800px]">
    TinkerHub MEC Chapter is a branch of a non-profit organization that has the aim to learn, interact, and innovate. We provide students with opportunities to enhance their skills through hands-on experience and community learning culture.
  </p>
</div>


        {/* TinkerHub Logo */}
        <div className="absolute bottom-[-90px] right-12 transform -rotate-6 hidden md:block">
          <Image
            src={TinkerHubLogo}
            alt="TinkerHub Logo"
            width={250}
            height={250}
          />
        </div>
      {/* Bubble Image */}
<div className="relative z-10 flex items-center justify-center w-full h-full px-4 top-[-40px]">
  <Image
    className="brightness-125 z-10 w-[300px] h-[350px] -left-[110px] absolute top-[-40px] hidden sm:block"
    src={BubbleImage}
    alt="Bubble Image"

  />
</div>

      </div>
    </section>
  );
};

export default About;
