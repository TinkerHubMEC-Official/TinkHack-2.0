const Faq = () => {
  return (
    <section
      id="faq"
      className="h-screen bg-custom-dark text-white flex flex-col items-center justify-center relative"
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: 'url("/frames/Frame-1.svg")' }}
      ></div>
      <div className="absolute inset-0 bg-custom-dark opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <h2 className="text-4xl font-bold relative z-10 text-center bg-gradient-to-r from-[#ff7eb9] to-[#ffdf7f] bg-clip-text text-transparent">
        FAQs
      </h2>
      <img
        className="brightness-125 absolute z-10 top-[12px] left-[40px]"
        src="/images/Broken_glass_3.svg"
        alt="Broken Glass Image"
        style={{ width: "200px", height: "400px" }}
      />
      <div className="container relative flex"></div>
    </section>
  );
};

export default Faq;
