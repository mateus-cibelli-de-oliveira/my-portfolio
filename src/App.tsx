import AboutSection from "./pages/Home/sections/AboutSection/AboutSection";
import HeroSection from "./pages/Home/sections/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar";
import ProjectsSection from "./pages/Home/sections/ProjectsSection/ProjectsSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default App;
