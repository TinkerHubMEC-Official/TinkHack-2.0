const Landing = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-custom-dark relative flex items-center justify-center"
    >
      <div
        className="absolute top-0 inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <div className="container flex w-full">
        {/* New Image for the Upper-Left Corner */}
        <img
          className="brightness-125 absolute top-0 left-0 z-10 w-[400px] h-[150px]"
          src="/images/landing_page_1.svg"
          alt="Landing Page Corner Image"
        />
        {/* New Image for the Upper-Right Corner */}
        <img
          className="brightness-125 absolute top-0 right-0 z-10 w-[450px] h-[380px]"
          src="/images/landing_page_2.svg"
          alt="Landing Page Corner Image"
        />
        {/* New Image for the Lower-Right Corner */}
        <img
          className="brightness-125 absolute bottom-0 right-0 z-10 w-[1000px] h-[1000px] mb-[-645px] mr-[-290px]"
          src="/images/landing_page_3.svg"
          alt="Landing Page Corner Image"
        />
        <img
          className="brightness-125 absolute bottom-0 left-0 z-50 w-[370px] h-[460px] mb-[-320px]"
          src="/images/Broken_glass_1.svg"
          alt="Broken Glass Image"
        />
        <img
          className="brightness-125 absolute bottom-0 left-0 z-50 w-[150px] h-[150px] mb-[-55px] ml-[137px]"
          src="/images/Broken_glass_2.svg"
          alt="Broken Glass Image"
        />
        
        {/* Main Logo Image */}
        <img
          className="brightness-125 w-auto h-[610px] relative flex z-10 mx-auto"
          src="/images/TinkHackLogoMain.svg"
          alt="Tink Hack Logo"
        />
      </div>
    </section>
  );
};

export default Landing;
