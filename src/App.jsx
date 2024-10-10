import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection/>
      </div>
    </>
  );
};

export default App;
