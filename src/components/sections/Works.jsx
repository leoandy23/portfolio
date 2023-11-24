import React, { useState } from "react";
import TECHS from "../../models/technologies.enum";
import WorkCard from "../pure/WorkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  const initialVisibleProjects = 3; // Número inicial de proyectos visibles
  const [visibleProjects, setVisibleProjects] = useState(
    initialVisibleProjects
  );

  const projects = [
    {
      title: "Development of My Personal Portfolio with React.js",
      description:
        "As a passionate developer, I designed and developed my own personal portfolio using the React.js JavaScript library. This project is not only a visual representation of my technical skill, but also a platform that highlights my experience, projects and skills in an interactive and engaging way.",
      image: ["work-6.png", "work-6_1.png"],
      url: "https://leoandy23.github.io/portfolio/",
      technologies: [
        TECHS.HTML,
        TECHS.CSS,
        TECHS.JS,
        TECHS.REACT,
        TECHS.GITHUB,
      ],
    },
    {
      title: "USA Deeds Information Extraction System with GPT-4 and Laravel",
      description:
        "I developed a comprehensive system using Laravel's MVC architecture and MySQL as a database to automate the extraction of crucial information from property deeds in the United States. This advanced solution integrates leading technologies such as OpenAI's GPT-4 API to ensure accuracy in the interpretation of legal documents.",
      image: ["work-5.png", "work-5_1.png", "work-5_2.png"],
      url: "https://prueba.oa7ingenierias.com/",
      technologies: [TECHS.LARAVEL, TECHS.PYTHON, TECHS.MYSQL, TECHS.BOOTSTRAP],
    },
    {
      title: "Mitopup Mobile App",
      description:
        "Developed native Mitopup Android and iOS apps using Flutter. These apps offer users a fluid and consistent experience, connecting them in an agile way with Mitopup services. A project that enhances Mitopup's digital presence on mobile devices, ensuring accessibility and comfort for its users.",
      image: ["work-4.jpg", "work-4_1.jpg", "work-4_2.jpg"],
      url: "https://play.google.com/store/apps/details?id=com.mitopup.dev&hl=es_EC&gl=US",
      technologies: [TECHS.FLUTTER, TECHS.PYTHON, TECHS.MYSQL],
    },
    {
      title: "App Web to Mitopup",
      description:
        "I developed a web application for Mitopup, taking care of both the frontend and the backend. I designed an intuitive and secure interface, providing Mitopup with a complete and efficient platform to interact with clients and optimize internal operations. A comprehensive solution that fuses design and functionality.",
      image: ["work-3.png", "work-3_1.png", "work-3_2.png"],
      url: "http://mitopup.com/",
      technologies: [TECHS.JS, TECHS.BOOTSTRAP, TECHS.PYTHON, TECHS.MYSQL],
    },
    {
      title: "Landing Page to LATCOM",
      description:
        "I developed a concise and attractive landing page for LATCOM, highlighting its innovation in technological solutions. The modern design and streamlined user experience effectively present LATCOM's diverse services, delivering a striking impression to visitors and potential customers. A project that fuses design and functionality to enhance LATCOM's digital presence.",
      image: ["work-2.png", "work-2_1.png", "work-2_2.png"],
      url: "http://5.78.79.129:8080/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.BOOTSTRAP],
    },
    {
      title: "Landing Page to OA7INGENIERIAS",
      description:
        "I collaborated with OA7Ingenierias to develop an impressive and efficient landing page. Designed to highlight your engineering expertise, the page offers an engaging and responsive experience. From design to implementation, every detail reflects the professionalism and dedication of OA7Ingenierias. The landing page now serves as your digital front door, optimized to impress and captivate visitors.",
      image: ["work-1.png", "work-1_1.png", "work-1_2.png", "work-1_3.png"],
      url: "https://www.oa7ingenierias.com/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT],
    },
    {
      title: "Personal Portfolio Prototype",
      description:
        "I developed a Landing Page prototype as a personal project, exploring the combination of HTML, CSS and JavaScript to create an attractive and functional web experience. This exercise allowed me to practice and demonstrate skills in front-end development and user interface design.",
      image: ["work-0.png", "work-0_1.png", "work-0_2.png"],
      url: "https://leoandy23.github.io/landing-page-cv/Mi_Portafolio/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT, TECHS.GITHUB],
    },
  ];

  const handleShowMore = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <div className="section" id="works">
      <div className="container py-5">
        <div className="text-center">
          <h2 className="section-title fw-bold">My Projects</h2>
          <div>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <WorkCard work={project} key={index} index={index}></WorkCard>
            ))}
          </div>
          {visibleProjects < projects.length && (
            <button className="btn btn-primary mt-3 " onClick={handleShowMore}>
              View more{" "}
              <FontAwesomeIcon icon={["fas", "angle-down"]} className="ms-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
