import Workflow from "./Components/Workflow";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Pricing />
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
