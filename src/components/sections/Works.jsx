import React from "react";
import TECHS from "../../models/technologies.enum";
import WorkCard from "../pure/WorkCard";

const Works = () => {
  const projects = [
    {
      title: "Landing Page to OA7INGENIERIAS",
      description:
        "I collaborated with OA7Ingenierias to develop an impressive and efficient landing page. Designed to highlight your engineering expertise, the page offers an engaging and responsive experience. From design to implementation, every detail reflects the professionalism and dedication of OA7Ingenierias. The landing page now serves as your digital front door, optimized to impress and captivate visitors.",
      image: ["work-1.png"],
      url: "https://www.oa7ingenierias.com/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT],
    },
    {
      title: "Landing Page to LATCOM",
      description:
        "I developed a concise and attractive landing page for LATCOM, highlighting its innovation in technological solutions. The modern design and streamlined user experience effectively present LATCOM's diverse services, delivering a striking impression to visitors and potential customers. A project that fuses design and functionality to enhance LATCOM's digital presence.",
      image: ["work-2.png"],
      url: "http://5.78.79.129:8080/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.BOOTSTRAP],
    },
    {
      title: "App Web to Mitopup",
      description:
        "I developed a web application for Mitopup, taking care of both the frontend and the backend. I designed an intuitive and secure interface, providing Mitopup with a complete and efficient platform to interact with clients and optimize internal operations. A comprehensive solution that fuses design and functionality.",
      image: ["work-3.png"],
      url: "http://mitopup.com/",
      technologies: [TECHS.JS, TECHS.BOOTSTRAP, TECHS.PYTHON, TECHS.MYSQL],
    },
    {
      title: "Mitopup Mobile App",
      description:
        "Developed native Mitopup Android and iOS apps using Flutter. These apps offer users a fluid and consistent experience, connecting them in an agile way with Mitopup services. A project that enhances Mitopup's digital presence on mobile devices, ensuring accessibility and comfort for its users.",
      image: ["work-4.jpg", "work-4_1.jpg", "work-4_2.jpg"],
      url: "https://play.google.com/store/apps/details?id=com.mitopup.dev&hl=es_EC&gl=US",
      technologies: [TECHS.JS, TECHS.BOOTSTRAP, TECHS.PYTHON, TECHS.MYSQL],
    },
  ];
  return (
    <div className="section" id="works">
      <div className="container py-5">
        <div className="text-center">
          <h2 className="section-title fw-bold">My Projects</h2>
          <div>
            {projects.map((project, index) => (
              <WorkCard work={project} key={index} index={index}></WorkCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
