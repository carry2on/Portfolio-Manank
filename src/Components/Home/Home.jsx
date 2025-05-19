import React from "react";
import Avtarimage from "../../assets/bg.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-4 md:p-10 lg:p-20">
      <div className="w-full md:w-2/4 md:pt-10 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold flex leading-tight md:leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl tracking-tight mt-4">
          a passionate and dedicated Computer Engineering student with a strong interest in web development and emerging technologies. I thrive on turning creative ideas into real-world digital experiences through clean, efficient, and responsive code.
        </p>
        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap gap-4">
          <a
            href="/Resume.pdf"
            target="main"
            rel="noopener noreferrer"
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-[#080c74] text-white text-base md:text-lg border-2 border-white rounded hover:bg-[#9c97f1] transition-colors duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/carry2on"
            target="main"
            rel="noopener noreferrer"
            className="inline-block px-4 md:px-6 py-2 md:py-3 bg-[#080c74] text-white text-base md:text-lg border-2 border-white rounded hover:bg-[#9c97f1] transition-colors duration-300"
          >
            Visit Github
          </a>
        </div>
      </div>
      <div className="w-full md:w-auto flex justify-center">
        <img className="max-w-full h-auto" src={Avtarimage} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;