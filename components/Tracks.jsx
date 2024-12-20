const Tracks = () => {
  return (
    <section
      id="tracks"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative"
    >
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        Tracks
      </h2>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <img
        className="brightness-125 absolute left-0 z-10 rotate-90 opacity-60 w-[300px] h-[600px] mb-[-405px] ml-[-70px] mt-[-30px] bottom-[-300px]"
        src="/images/Broken_glass_1.svg"
        alt="Broken Glass Image"
      />
      <div className="container relative flex"></div>
    </section>
  );
};

export default Tracks;
