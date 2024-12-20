const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="h-screen bg-custom-dark text-white flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        Sponsors
      </h2>
    </section>
  );
};

export default Sponsors;
