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
    </div>
  );
};

export default HeroSection;
