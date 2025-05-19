import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import EducationSection from "./Components/EducationSection/EducationSection";

function App() {
   return (
    <div>
      <Navbar  />
      <Home  />
      <EducationSection />
      <About  />
      <Experience  />
 <Projects/>

      <Footer />
    </div>
  );
}

export default App;
