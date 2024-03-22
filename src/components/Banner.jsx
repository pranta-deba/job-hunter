import BannerImage from "../assets/images/user.png";
const Banner = () => {
  return (
    <div className="hero primary-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 text-center lg:text-left">
          <img src={BannerImage} alt="" />
        </div>

        <div className="flex-1 card space-y-3">
          <h1 className="text-4xl md:text-7xl font-extrabold">
            One Step Closer To Your <br />
            <span className="text-primary">Dream Job</span>
          </h1>
          <p className="text-[#757575 text-lg font-medium">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <div>
            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 md:font-medium border-primary  text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-primary transition duration-300 group-hover:text-white ease md:text-xl font-extrabold">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
