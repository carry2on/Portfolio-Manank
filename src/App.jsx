import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import EducationSection from "./Components/EducationSection/EducationSection";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar className="opacity-0 animate-fade-in" />
      <Home className="opacity-0 animate-fade-in" />
      <EducationSection className="opacity-0 animate-fade-in"/>
      <About className="opacity-0 animate-fade-in" />
      <Experience className="opacity-0 animate-fade-in" />
 <Projects/>

      <Footer />
    </div>
  );
}

export default App;
