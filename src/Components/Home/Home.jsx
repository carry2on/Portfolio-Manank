import React from "react";
import Avtarimage from "../../assets/bg.png"
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          a passionate and dedicated Computer Engineering student with a strong interest in web development and emerging technologies. I thrive on turning creative ideas into real-world digital experiences through clean, efficient, and responsive code.
 
        </p>
       <div className="mt-6 space-x-4 pt-20">
      <a
        href="/Resume.pdf"
        target="main"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#080c74] text-white text-lg border-2 border-white rounded hover:bg-[#9c97f1] transition-colors duration-300"
      >
        Download Resume
      </a>
      <a
        href="https://github.com/carry2on"
        target="main"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#080c74] text-white text-lg border-2 border-white rounded hover:bg-[#9c97f1] transition-colors duration-300"
      >
        Visit Github
      </a>
    </div>
      </div>
      <div>
        <img className="" src={Avtarimage} alt="" />
      </div>
    </div>
  );
};

export default Home;
