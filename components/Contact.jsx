import Image from 'next/image';
import FrameImage from '@/assets/Frame-1.svg';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-custom-dark text-white flex items-center justify-center relative"
    >
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

      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#E283BD] to-[#E2CF6C] bg-clip-text text-transparent">
        Contact Us
      </h2>
    </section>
  );
};

export default Contact;
