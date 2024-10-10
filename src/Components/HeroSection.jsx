import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 items-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with your
        intuitive developvement tools, Get started today and turn your
        imagination into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-t from-orange-500 to-orange-800 px-4 py-3 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="px-4 py-3 mx3' border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg mx-2 my-4 border border-orange-700 shadow-orange-400 w-1/2"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg mx-2 my-4 border border-orange-700 shadow-orange-400 w-1/2"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
