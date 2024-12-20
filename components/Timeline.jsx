const Timeline = () => {
  return (
    <section
      id="timeline"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative"
    >
      <div
        className="absolute inset-0 bg-center bg-cover rotate-180 scale-x-[-1]"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        Timeline
      </h2>
      <img
        className="brightness-125 absolute z-10 w-[500px] h-[800px] top-0 right-0 mt-[-500px]"
        src="/images/timeline.svg"
        alt="Bubble Image"
      />
      <div className="container relative flex"></div>
    </section>
  );
};

export default Timeline;
