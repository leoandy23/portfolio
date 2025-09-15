import React, { useState } from "react";
import TECHS from "../../models/technologies.enum";
import WorkCard from "../pure/WorkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  const initialVisibleProjects = 3; // Número inicial de proyectos visibles
  const [visibleProjects, setVisibleProjects] = useState(
    initialVisibleProjects
  );
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Chat Assistant for Childnexus",
      description:
        "We developed an AI-powered conversational assistant enriched with a recommendation system based on semantic search and artificial intelligence, fully integrated into the Childnexus platform. Since Childnexus focuses on children’s and families’ mental health, the assistant not only provides real-time answers but also suggests highly relevant content such as podcast episodes, specialized articles, and mental health professionals. This project combines advanced NLP and recommendation engines to enhance user experience and make access to mental wellness resources more effective.",
      image: ["work-9.png", "work-9_1.png"],
      url: "https://www.childnexus.com/chat",
      technologies: [TECHS.PYTHON, TECHS.HTML, TECHS.JS, TECHS.CSS],
      category: "ai",
    },

    {
      title: "SCIN.AI",
      description:
        "SCIN.AI is an AI-powered mobile app that analyzes your skin from a photo. It detects conditions such as acne, wrinkles, skin type, and hydration, providing a personalized diagnosis in seconds. It also recommends skincare products tailored to your needs, combining science and technology to improve your facial care routine.",
      image: ["work-8.jpg", "work-8_1.jpg", "work-8_2.jpg"],
      url: "https://scin.ai/",
      technologies: [TECHS.PYTHON, TECHS.FLUTTER, TECHS.MYSQL],
      category: "mobile",
    },
    {
      title: "Wingman - AI Work Companion",
      description:
        "Wingman is an intelligent AI teammate that learns from your documents, APIs, and databases to provide 24/7 assistance. It can be customized with roles, avatars, and communication styles, offering multilingual support, real-time learning, role-based access, and seamless embedding in apps or websites. This project showcases my ability to design scalable AI solutions for businesses, integrating advanced features like knowledge base training, team management, and enterprise-ready plans.",
      image: ["work-7.png", "work-7_1.png", "work-7_2.png", "work-7_3.png"],
      url: "http://37.27.240.190:5001/",
      technologies: [TECHS.PYTHON, TECHS.HTML, TECHS.JS, TECHS.CSS],
      category: "ai",
    },
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
      category: "web",
    },
    {
      title: "USA Deeds Information Extraction System with GPT-4 and Laravel",
      description:
        "I developed a comprehensive system using Laravel's MVC architecture and MySQL as a database to automate the extraction of crucial information from property deeds in the United States. This advanced solution integrates leading technologies such as OpenAI's GPT-4 API to ensure accuracy in the interpretation of legal documents.",
      image: ["work-5.png", "work-5_1.png", "work-5_2.png"],
      url: "https://prueba.oa7ingenierias.com/",
      technologies: [TECHS.LARAVEL, TECHS.PYTHON, TECHS.MYSQL, TECHS.BOOTSTRAP],
      category: "ai",
    },
    {
      title: "Mitopup Mobile App",
      description:
        "Developed native Mitopup Android and iOS apps using Flutter. These apps offer users a fluid and consistent experience, connecting them in an agile way with Mitopup services. A project that enhances Mitopup's digital presence on mobile devices, ensuring accessibility and comfort for its users.",
      image: ["work-4.jpg", "work-4_1.jpg", "work-4_2.jpg"],
      url: "https://apps.apple.com/us/app/mitopup/id6470391338",
      technologies: [TECHS.FLUTTER, TECHS.PYTHON, TECHS.MYSQL],
      category: "mobile",
    },
    {
      title: "App Web to Mitopup",
      description:
        "I developed a web application for Mitopup, taking care of both the frontend and the backend. I designed an intuitive and secure interface, providing Mitopup with a complete and efficient platform to interact with clients and optimize internal operations. A comprehensive solution that fuses design and functionality.",
      image: ["work-3.png", "work-3_1.png", "work-3_2.png"],
      url: "http://mitopup.com/",
      technologies: [TECHS.JS, TECHS.BOOTSTRAP, TECHS.PYTHON, TECHS.MYSQL],
      category: "web",
    },
    {
      title: "Landing Page to LATCOM",
      description:
        "I developed a concise and attractive landing page for LATCOM, highlighting its innovation in technological solutions. The modern design and streamlined user experience effectively present LATCOM's diverse services, delivering a striking impression to visitors and potential customers. A project that fuses design and functionality to enhance LATCOM's digital presence.",
      image: ["work-2.png", "work-2_1.png", "work-2_2.png"],
      url: "http://5.78.79.129:8080/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.BOOTSTRAP],
      category: "web",
    },
    {
      title: "Landing Page to OA7INGENIERIAS",
      description:
        "I collaborated with OA7Ingenierias to develop an impressive and efficient landing page. Designed to highlight your engineering expertise, the page offers an engaging and responsive experience. From design to implementation, every detail reflects the professionalism and dedication of OA7Ingenierias. The landing page now serves as your digital front door, optimized to impress and captivate visitors.",
      image: ["work-1.png", "work-1_1.png", "work-1_2.png", "work-1_3.png"],
      url: "https://www.oa7ingenierias.com/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT],
      category: "web",
    },
    {
      title: "Personal Portfolio Prototype",
      description:
        "I developed a Landing Page prototype as a personal project, exploring the combination of HTML, CSS and JavaScript to create an attractive and functional web experience. This exercise allowed me to practice and demonstrate skills in front-end development and user interface design.",
      image: ["work-0.png", "work-0_1.png", "work-0_2.png"],
      url: "https://leoandy23.github.io/landing-page-cv/Mi_Portafolio/",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT, TECHS.GITHUB],
      category: "web",
    },
  ];

  // Filtrado de proyectos
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleShowMore = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <div className="section" id="works">
      <div className="container py-5">
        <div className="text-center">
          <h2 className="section-title fw-bold mb-4">My Projects</h2>

          {/* Filtros de categorías */}
          <div className="mb-4">
            <button
              className={`btn ${
                filter === "all" ? "btn-primary" : "btn-outline-primary"
              } me-2 mb-2`}
              onClick={() => setFilter("all")}>
              All Projects
            </button>
            <button
              className={`btn ${
                filter === "web" ? "btn-primary" : "btn-outline-primary"
              } me-2 mb-2`}
              onClick={() => setFilter("web")}>
              Web Development
            </button>
            <button
              className={`btn ${
                filter === "ai" ? "btn-primary" : "btn-outline-primary"
              } me-2 mb-2`}
              onClick={() => setFilter("ai")}>
              AI Solutions
            </button>
            <button
              className={`btn ${
                filter === "mobile" ? "btn-primary" : "btn-outline-primary"
              } me-2 mb-2`}
              onClick={() => setFilter("mobile")}>
              Mobile Apps
            </button>
          </div>

          <div>
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <WorkCard work={project} key={index} index={index}></WorkCard>
              ))}
          </div>

          {visibleProjects < filteredProjects.length && (
            <button
              className="btn btn-primary mt-4 px-4 py-2"
              onClick={handleShowMore}>
              View more projects
              <FontAwesomeIcon icon={["fas", "arrow-down"]} className="ms-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
