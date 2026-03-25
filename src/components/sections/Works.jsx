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
    // TOP Priority - Backend & AI Projects
    {
      title: "Awana Recruitment Platform",
      description:
        "Developed an AI-powered recruitment automation system that streamlines the hiring process through intelligent candidate-job matching. The platform analyzes candidate information and job descriptions to generate matching scores, creates tailored EQ assessments, and provides AI-driven interview transcript analysis. The system reduces hiring time and improves candidate-job fit accuracy through advanced NLP techniques.",
      image: [],
      url: "#",
      role: "AI Engineer & Backend Developer",
      architecture: "REST API with ML Matching Engine",
      technologies: [TECHS.NESTJS, TECHS.FASTAPI, TECHS.PYTHON, TECHS.OPENAI, TECHS.POSTGRESQL, TECHS.PGVECTOR, TECHS.JWT, TECHS.DOCKER, TECHS.AZURE],
      cloud: TECHS.AZURE,
      category: "backend",
      techDetails: {
        backend: ["NestJS", "Python FastAPI", "OpenAI API"],
        ai: ["LLMs", "Semantic embeddings (pgvector)", "Matching algorithms"],
        database: ["PostgreSQL with pgvector extension"],
        infrastructure: ["Docker", "Azure", "Containerization"],
        authentication: ["JWT"],
      },
      keyAchievements: [
        "Implemented intelligent matching algorithm with 85%+ accuracy",
        "Created dynamic EQ assessment system",
        "Deployed on Azure with scalable architecture",
        "Integrated LLM for automated CV and interview analysis",
      ],
    },
    {
      title: "TruthBridge - AI University Advisor",
      description:
        "Developed an AI-powered platform that helps recently graduated high school students choose the best university option based on their preferences and academic history. The system features an intelligent chatbot that conducts a comprehensive survey of ~80 questions while allowing users to ask clarification questions about any question. The system uses LLMs to distinguish between valid survey responses and clarification requests, providing a conversational and user-friendly experience.",
      image: [],
      url: "#",
      role: "AI Engineer & Backend Developer",
      architecture: "REST API with Conversational AI",
      technologies: [TECHS.NESTJS, TECHS.OPENAI, TECHS.LANGCHAIN, TECHS.POSTGRESQL, TECHS.JWT, TECHS.DOCKER, TECHS.AWS],
      cloud: TECHS.AWS,
      category: "backend",
      techDetails: {
        backend: ["NestJS", "OpenAI API"],
        ai: ["LangChain RAG system", "LLMs", "Conversational AI"],
        database: ["PostgreSQL"],
        infrastructure: ["Docker", "AWS", "Containerization"],
        authentication: ["JWT"],
      },
      keyAchievements: [
        "Built intelligent conversational system with context awareness",
        "Implemented RAG system with LangChain",
        "Deployed on AWS with auto-scaling",
        "Processed complex survey logic with AI clarification handling",
      ],
    },
    {
      title: "Childnexus - Mental Health AI Assistant",
      description:
        "Developed an AI-powered conversational assistant enriched with a recommendation system based on semantic search. The assistant focuses on helping families and children with mental health questions while recommending highly relevant content such as podcast episodes, specialized articles, and mental health professionals. Implemented a complete data pipeline using Apache Airflow to vectorize and manage content, integrated Pinecone for semantic search, and deployed on Google Cloud Platform with infrastructure as code.",
      image: ["work-9.png", "work-9_1.png"],
      url: "https://www.childnexus.com/chat",
      role: "Backend Developer & Data Analyst",
      architecture: "RAG System with ETL Pipeline",
      technologies: [TECHS.PYTHON, TECHS.AIRFLOW, TECHS.PINECONE, TECHS.OPENAI, TECHS.DOCKER, TECHS.TERRAFORM, TECHS.GCP],
      cloud: TECHS.GCP,
      category: "ai",
      techDetails: {
        backend: ["Python"],
        ai: ["OpenAI API", "Semantic search with Pinecone", "RAG system"],
        database: ["Pinecone vector database"],
        dataEngineering: ["Apache Airflow", "ETL pipeline", "Content vectorization"],
        infrastructure: ["Docker", "GCP", "Terraform", "Infrastructure as Code"],
      },
      keyAchievements: [
        "Designed and implemented Apache Airflow ETL pipeline for content vectorization",
        "Built semantic search system for mental health content recommendation",
        "Deployed containerized backend on GCP with Terraform",
        "Integrated Pinecone for efficient vector similarity search",
        "Reduced content retrieval latency by 60%",
      ],
    },
    {
      title: "Wingman - AI Work Companion",
      description:
        "Developed a comprehensive AI-powered chat system that learns from user documents, APIs, and databases to provide 24/7 intelligent assistance. The platform supports customizable chatbot roles, avatars, communication styles, and multilingual support. Implemented real-time learning capabilities, role-based access control, and seamless embedding in web applications. Built with subscription-based pricing using Stripe, featuring advanced knowledge base training and team management capabilities.",
      image: ["work-7.png", "work-7_1.png", "work-7_2.png", "work-7_3.png"],
      url: "#",
      role: "Full-Stack Developer (Solo)",
      architecture: "Scalable RAG System with Embeddings",
      technologies: [TECHS.PYTHON, TECHS.FLASK, TECHS.LANGCHAIN, TECHS.CHROMADB, TECHS.OPENAI, TECHS.STRIPE, TECHS.JWT, TECHS.MYSQL, TECHS.HTML, TECHS.JS],
      cloud: null,
      category: "ai",
      techDetails: {
        backend: ["Python Flask", "LangChain", "OpenAI API"],
        ai: ["Semantic embeddings", "RAG system", "ChromaDB", "Knowledge base training"],
        database: ["MySQL", "ChromaDB"],
        payment: ["Stripe integration"],
        frontend: ["Django templates", "HTML", "JavaScript"],
      },
      keyAchievements: [
        "Built complete RAG system with multi-source learning",
        "Implemented role-based chatbot customization",
        "Integrated Stripe for subscription management",
        "Created embeddable chat widget for websites",
        "Supported multiple document formats (PDF, HTML, SCORM, images, video)",
      ],
    },
    {
      title: "Stimulus - Data Engineering Bootcamp",
      description:
        "Served as technical assistant for a data engineering training program on Databricks platform. Designed and implemented three configurable, replicable pipeline tracks covering data ingestion, transformation, and enrichment. Track A covered data ingestion from multiple sources (APIs, CSV, JSON, web scraping). Track B focused on data cleaning and normalization. Track C implemented data enrichment through LLM-based classification. Ensured medallion architecture compliance and best practices across all pipelines.",
      image: [],
      url: "#",
      role: "Data Engineer & Technical Assistant",
      architecture: "Medallion Architecture Pipelines",
      technologies: [TECHS.PYSPARK, TECHS.DATABRICKS, TECHS.PYTHON, TECHS.TERRAFORM, TECHS.OPENAI, TECHS.GIT],
      cloud: TECHS.DATABRICKS,
      category: "backend",
      techDetails: {
        dataEngineering: ["PySpark", "Databricks", "SQL", "Medallion architecture"],
        etl: ["Data ingestion", "Transformation", "Enrichment"],
        ai: ["LLM-based classification"],
        infrastructure: ["Terraform", "Databricks SDK"],
      },
      keyAchievements: [
        "Designed 3 configurable pipeline tracks (medallion architecture)",
        "Implemented data ingestion from multiple sources",
        "Created LLM-based data classification system",
        "Maintained GitHub repository with integrated pipelines",
        "Ensured code quality and version control best practices",
      ],
    },
    // MEDIUM Priority - Full-Stack Projects
    {
      title: "Priorizador de Proyectos MTOP",
      description:
        "Developed a comprehensive system for Ecuador's Ministry of Transport and Public Works to prioritize transportation projects using advanced indicators. The platform analyzes road projects, metro routes, and other infrastructure based on economic, social, demographic, geographic, and technical indicators. Implemented geospatial processing using PostGIS with Leaflet visualization, built complex analytics using scikit-learn and R, and deployed a working demo on AWS.",
      image: [],
      url: "#",
      role: "Full-Stack Developer & GIS Specialist",
      architecture: "Full-Stack Web Application with Geospatial Analysis",
      technologies: [TECHS.LARAVEL, TECHS.PYTHON, TECHS.POSTGIS, TECHS.POSTGRESQL, TECHS.LEAFLET, TECHS.SCIKIT_LEARN, TECHS.R, TECHS.AWS],
      cloud: TECHS.AWS,
      category: "fullstack",
      techDetails: {
        backend: ["Laravel", "Python"],
        frontend: ["Leaflet JS", "HTML/CSS/JS"],
        geospatial: ["PostGIS", "Geographic data analysis"],
        analytics: ["scikit-learn", "R", "Complex statistical analysis"],
        database: ["PostgreSQL with PostGIS"],
        infrastructure: ["AWS"],
      },
      keyAchievements: [
        "Implemented PostGIS for geometric project data storage",
        "Built Leaflet-based geospatial visualization",
        "Created multi-factor prioritization algorithm",
        "Integrated complex R analytics for demographic analysis",
        "Deployed demo on AWS for stakeholder evaluation",
      ],
    },
    {
      title: "Mitopup - Mobile & Web Platform",
      description:
        "Developed complete mobile and web applications for Mitopup, a telecom reload service operating across USA, Mexico, and El Salvador. Built responsive web interface with backend REST APIs and native mobile apps for iOS and Android. Implemented JWT-based authentication, payment processing, and real-time reload management. Notably, I learned Flutter in 15 days and single-handedly developed the mobile app when the original developer left the project.",
      image: ["work-4.jpg", "work-4_1.jpg", "work-4_2.jpg", "work-3.png", "work-3_1.png", "work-3_2.png"],
      url: "https://apps.apple.com/us/app/mitopup/id6470391338",
      role: "Full-Stack Developer (Web + Mobile)",
      architecture: "Multi-Platform Application",
      technologies: [TECHS.FLUTTER, TECHS.PYTHON, TECHS.MYSQL, TECHS.JWT, TECHS.HTML, TECHS.BOOTSTRAP, TECHS.JS],
      cloud: null,
      category: "fullstack",
      techDetails: {
        backend: ["Python (EDB low-code framework)"],
        mobile: ["Flutter for iOS/Android"],
        frontend: ["HTML", "Bootstrap", "JavaScript"],
        database: ["MySQL"],
        authentication: ["JWT"],
      },
      keyAchievements: [
        "Developed web platform for telecom reload services",
        "Built native iOS and Android apps with Flutter",
        "Learned Flutter in 15 days and deployed production apps",
        "Implemented payment processing for multiple countries",
        "Created JWT-based secure authentication system",
      ],
    },
    {
      title: "Backdealers - Telecom Management Backoffice",
      description:
        "Developed a comprehensive backoffice system for Mitopup's provider management. The system controls multiple telecom providers, manages product inventory, tracks transaction logs, and generates statistical reports. Implemented role-based access control, secure authentication, and real-time analytics dashboard for administrative oversight.",
      image: [],
      url: "#",
      role: "Full-Stack Developer",
      architecture: "Web-Based Admin Dashboard",
      technologies: [TECHS.PYTHON, TECHS.MYSQL, TECHS.JWT, TECHS.HTML, TECHS.BOOTSTRAP, TECHS.JS],
      cloud: null,
      category: "fullstack",
      techDetails: {
        backend: ["Python (EDB low-code framework)"],
        frontend: ["HTML", "Bootstrap", "JavaScript (JQuery)"],
        database: ["MySQL"],
        authentication: ["JWT"],
      },
      keyAchievements: [
        "Built multi-provider management system",
        "Implemented role-based access control",
        "Created statistical reporting dashboard",
        "Managed product inventory across providers",
      ],
    },
    {
      title: "SCIN.AI - Skin Analysis Mobile App",
      description:
        "Developed a machine learning-powered mobile app that analyzes skin conditions from photos. The app detects acne, wrinkles, skin type, and hydration levels, providing personalized diagnosis and skincare product recommendations. Built native apps for both iOS and Android using Flutter with backend services for image processing and ML model integration.",
      image: ["work-8.jpg", "work-8_1.jpg", "work-8_2.jpg"],
      url: "https://scin.ai/",
      role: "Backend & Mobile Developer",
      architecture: "Mobile App with ML Backend",
      technologies: [TECHS.FLUTTER, TECHS.PYTHON, TECHS.MYSQL, TECHS.JWT],
      cloud: null,
      category: "mobile",
      techDetails: {
        mobile: ["Flutter for iOS/Android"],
        backend: ["Python (EDB framework)", "ML model integration"],
        database: ["MySQL"],
        authentication: ["JWT"],
      },
      keyAchievements: [
        "Built cross-platform mobile app with Flutter",
        "Integrated ML models for skin condition detection",
        "Implemented personalized product recommendations",
        "Created JWT-based secure authentication",
      ],
    },
    // LOW Priority - Web Projects
    {
      title: "Development of Personal Portfolio",
      description:
        "Designed and developed my personal portfolio using React.js with Bootstrap styling. This project showcases technical skills in modern web development, responsive design, and component-based architecture. The portfolio serves as an interactive platform highlighting professional experience, completed projects, and technical expertise.",
      image: ["work-6.png", "work-6_1.png"],
      url: "https://leoandy23.github.io/portfolio/",
      role: "Full-Stack Developer",
      architecture: "Single Page Application",
      technologies: [TECHS.REACT, TECHS.JS, TECHS.HTML, TECHS.CSS, TECHS.BOOTSTRAP, TECHS.GITHUB],
      cloud: null,
      category: "web",
      techDetails: {
        frontend: ["React", "Bootstrap", "CSS"],
        tools: ["GitHub Pages for deployment"],
      },
      keyAchievements: [
        "Built responsive SPA with React",
        "Implemented component-based architecture",
        "Created interactive project showcase",
        "Deployed on GitHub Pages",
      ],
    },
    {
      title: "USA Deeds Information Extraction",
      description:
        "Developed a system to automate extraction of crucial information from USA property deeds using GPT-4. The system uses Laravel's MVC architecture with MySQL database and integrates OpenAI's GPT-4 API for intelligent document parsing. Implemented accurate legal document interpretation for real estate professionals.",
      image: ["work-5.png", "work-5_1.png", "work-5_2.png"],
      url: "https://prueba.oa7ingenierias.com/",
      role: "Full-Stack Developer & AI Engineer",
      architecture: "Web Application with LLM Integration",
      technologies: [TECHS.LARAVEL, TECHS.PYTHON, TECHS.OPENAI, TECHS.MYSQL, TECHS.BOOTSTRAP],
      cloud: null,
      category: "ai",
      techDetails: {
        backend: ["Laravel", "Python"],
        ai: ["GPT-4 API", "Document parsing"],
        database: ["MySQL"],
        frontend: ["Bootstrap", "HTML/JS"],
      },
      keyAchievements: [
        "Integrated GPT-4 for legal document analysis",
        "Built Laravel MVC application",
        "Implemented accurate information extraction",
        "Created user-friendly interface for document upload",
      ],
    },
    {
      title: "Landing Page - LATCOM",
      description:
        "Developed an attractive and responsive landing page for LATCOM highlighting their technological solutions. The page features modern design, streamlined user experience, and effective service presentation.",
      image: ["work-2.png", "work-2_1.png", "work-2_2.png"],
      url: "#",
      role: "Frontend Developer",
      architecture: "Static Landing Page",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.BOOTSTRAP],
      cloud: null,
      category: "web",
      techDetails: {
        frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      },
      keyAchievements: [
        "Created responsive landing page design",
        "Implemented smooth animations",
        "Optimized for SEO",
      ],
    },
    {
      title: "Landing Page - OA7 Ingenierías",
      description:
        "Collaborated to develop a professional landing page showcasing OA7 Ingenierías' engineering expertise. The page features engaging design, responsive layout, and effective call-to-action elements.",
      image: ["work-1.png", "work-1_1.png", "work-1_2.png", "work-1_3.png"],
      url: "https://www.oa7ingenierias.com/",
      role: "Frontend Developer",
      architecture: "Static Landing Page",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT],
      cloud: null,
      category: "web",
      techDetails: {
        frontend: ["HTML", "CSS", "JavaScript"],
        versionControl: ["Git"],
      },
      keyAchievements: [
        "Designed professional landing page",
        "Implemented responsive layout",
        "Created engaging animations",
      ],
    },
    {
      title: "Personal Portfolio Prototype",
      description:
        "Developed a landing page prototype as a personal learning project. Explored HTML, CSS, and JavaScript best practices to create an attractive web experience. This project helped develop foundational front-end skills.",
      image: ["work-0.png", "work-0_1.png", "work-0_2.png"],
      url: "https://leoandy23.github.io/landing-page-cv/Mi_Portafolio/",
      role: "Frontend Developer",
      architecture: "Static Landing Page",
      technologies: [TECHS.HTML, TECHS.CSS, TECHS.JS, TECHS.GIT, TECHS.GITHUB],
      cloud: null,
      category: "web",
      techDetails: {
        frontend: ["HTML", "CSS", "JavaScript"],
        versionControl: ["Git", "GitHub"],
      },
      keyAchievements: [
        "Built responsive prototype",
        "Practiced front-end fundamentals",
        "Deployed on GitHub Pages",
      ],
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
                 filter === "backend" ? "btn-primary" : "btn-outline-primary"
               } me-2 mb-2`}
               onClick={() => setFilter("backend")}>
               Backend
             </button>
             <button
               className={`btn ${
                 filter === "ai" ? "btn-primary" : "btn-outline-primary"
               } me-2 mb-2`}
               onClick={() => setFilter("ai")}>
               AI/ML
             </button>
             <button
               className={`btn ${
                 filter === "fullstack" ? "btn-primary" : "btn-outline-primary"
               } me-2 mb-2`}
               onClick={() => setFilter("fullstack")}>
               Full-Stack
             </button>
             <button
               className={`btn ${
                 filter === "mobile" ? "btn-primary" : "btn-outline-primary"
               } me-2 mb-2`}
               onClick={() => setFilter("mobile")}>
               Mobile
             </button>
             <button
               className={`btn ${
                 filter === "web" ? "btn-primary" : "btn-outline-primary"
               } me-2 mb-2`}
               onClick={() => setFilter("web")}>
               Web
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
