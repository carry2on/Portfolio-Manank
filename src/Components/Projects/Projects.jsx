import React from "react";
import ProjectCard from "./ProjectCard";
import Img1 from "./image1.png";
import Img2 from "./image2.png";
import Img3 from "./image3.png";
import Img4 from "./image4.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
       
        sourceLink={"https://github.com/carry2on/sportyfy-clone"}
        imgSrc={Img1}
          title="spotify clone"
          main="this is a clone of the music player web apk created in simple HTML,CSS,JS"
        />
        <ProjectCard
           sourceLink={"https://github.com/carry2on/yogaweb"}
         imgSrc={Img2}
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
        sourceLink={"https://github.com/carry2on/TaskVista"}
demoLink={"https://v0-make-preview.vercel.app/"}
        imgSrc={Img3}
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
         <ProjectCard
sourceLink={"https://github.com/carry2on/stydyweb"}
        imgSrc={Img4}

          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />


      </div>
    </div>
  );
};

export default Projects;
