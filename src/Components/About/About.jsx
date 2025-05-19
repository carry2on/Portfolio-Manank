import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
import Aboutimg from "../../assets/tourist_va_03-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">🧑‍💻 About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={Aboutimg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I’m a curious Computer Engineering student passionate about
                  creating responsive and user-friendly web applications. During
                  my Frontend Developer internship at CodeSoft, I built
                  responsive UI components with HTML, CSS, and JavaScript,
                  gaining practical experience in development, problem-solving,
                  and Git collaboration. My current tech stack includes HTML5,
                  CSS3, JavaScript, and React.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
               Exploring MongoDB to design efficient, scalable data models and perform CRUD operations, focusing on integrating databases seamlessly with web applications
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As an aspiring backend developer, I am currently learning
                  Node.js to expand my capabilities beyond the frontend. My
                  focus is on understanding the fundamentals of server-side
                  development, handling requests and responses, and building the
                  backend logic that powers dynamic web applications
                </p>


              </span>
            </div>
        


          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
