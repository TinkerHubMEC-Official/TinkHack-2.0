import Image from 'next/image';
import BubbleImage from '@/assets/Bubble.svg';
import BackgroundImage from '@/assets/background.svg';

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
      <div >
        <Image
          src={BackgroundImage}  
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

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

      <div className="relative z-10 flex items-end justify-end w-full h-full px-4">
        {/* About Text */}
        <div className="text-start relative z-10 max-w-4xl">
          <h1 className="text-xl  mt-8 leading-relaxed ">
           TinkerHub MEC's overnight Hackathon, Kerala's inaugural Al-based event, promotes student expertise and explores Generative Al. This innovative platform unites technology and innovation, fostering diverse solutions in various fields.
          </h1>       
          <h1 className="text-xl  mt-8 leading-relaxed ">
            TinkerHub MEC Chapter is a branch of a non-profit organization that has the aim to learn, interact, and innovate. We provide students with opportunities to enhance their skills through hands-on- experience and community learning culture.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
