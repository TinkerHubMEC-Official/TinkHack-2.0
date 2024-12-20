const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative pt-32"
    >
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        About
      </h2>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>

      {/* Image and About Text Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Image for the Upper-Left Corner */}
        <img
          className="brightness-125 z-10 w-[800px] h-[850px] ml-[-810px] absolute top-[140px]"
          src="/images/Bubble.svg"
          alt="Bubble Image"
        />

        {/* About Text */}
        <div className="text-center px-4 relative z-10 max-w-4xl">
          <h1 className="text-lg mt-8">
            Aith about Tinkith about tinkerhubmec. Lorem ipsum dolor sit a Aith
            about Tinkith about tinkerhubmec. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Hack. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. met, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Hack. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
