const Banner = () => {
  return (
    <div className="bg-[#001d26] md:min-h-screen">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col-reverse pt-10 md:p-5">
        <div className="flex items-center flex-col justify-center w-full md:w-1/2 p-5 md:p-0 text-center md:text-left">
          <h3 className="text-3xl md:text-5xl lg:text-7xl  text-white">
            Take Student Experience to the next level
          </h3>
          <p className="text-white  pr-5 text-xl pt-6">
            Architect client-centered total linkage for intuitive benefits
            restore convergence before real-time partnerships
          </p>
        </div>
        <div className="p-5 md:p-0 md:w-1/2">
          <img
            className="rounded-xl w-full"
            src="https://cdn.discordapp.com/attachments/1163919577130999870/1177691033660829786/hero.png?ex=65736d3e&is=6560f83e&hm=2798628793ee308c050bd6d41f6b11c234f5a3d51871c35be91746fb55766a7e&"
            alt="student image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
