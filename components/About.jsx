import Image from 'next/image';
import BubbleImage from '@/assets/Bubble.svg';
import FrameImage from '@/assets/Frame-1.svg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative p-2"
    >
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent mb-16">
        About
      </h2>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={FrameImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-custom-dark opacity-50 z-1"></div>

      {/* Bubble Image */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <Image
          className="brightness-125 z-10 w-[400px] h-[450px] -left-[90px] absolute top-[-40px] hidden sm:block"
          src={BubbleImage}
          alt="Bubble Image"
          width={700} 
          height={750}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        {/* About Text */}
        <div className="text-center relative z-10 max-w-4xl">
          <h1 className="text-md mt-8 leading-relaxed ">
            Aith about Tinkith about tinkerhubmec. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Hack. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
