import React from "react";
import TechStackCard from "../pure/TechStackCard";
import "../../styles/TechStack.css";
import TECHS from "../../models/technologies.enum";

const TechStackSection = () => {
  const techStackData = {
    backend: [
      { name: "NestJS", proficiency: 85, icon: TECHS.NESTJS.type === "fab" ? ["fab", "node-js"] : ["fas", "server"] },
      { name: "Python (FastAPI)", proficiency: 90, icon: ["fab", "python"] },
      { name: "Python (Flask/Django)", proficiency: 85, icon: ["fab", "python"] },
      { name: "Node.js", proficiency: 75, icon: ["fab", "node-js"] },
      { name: "Laravel", proficiency: 80, icon: ["fab", "laravel"] },
    ],
    aiml: [
      { name: "LangChain", proficiency: 80, icon: ["fas", "link"] },
      { name: "OpenAI API", proficiency: 85, icon: ["fas", "brain"] },
      { name: "Embeddings & RAG", proficiency: 85, icon: ["fas", "database"] },
      { name: "Semantic Search", proficiency: 80, icon: ["fas", "search"] },
      { name: "Recommendation Systems", proficiency: 75, icon: ["fas", "star"] },
    ],
    data: [
      { name: "Apache Airflow", proficiency: 75, icon: ["fas", "wind"] },
      { name: "PySpark", proficiency: 70, icon: ["fas", "fire"] },
      { name: "Pandas & NumPy", proficiency: 85, icon: ["fab", "python"] },
      { name: "Databricks", proficiency: 70, icon: ["fas", "database"] },
      { name: "SQL", proficiency: 85, icon: ["fas", "database"] },
    ],
    cloud: [
      { name: "Google Cloud Platform", proficiency: 80, icon: ["fab", "google"] },
      { name: "Microsoft Azure", proficiency: 75, icon: ["fab", "microsoft"] },
      { name: "Amazon AWS", proficiency: 80, icon: ["fab", "aws"] },
      { name: "Terraform", proficiency: 80, icon: ["fas", "cube"] },
      { name: "Docker", proficiency: 85, icon: ["fab", "docker"] },
    ],
    databases: [
      { name: "PostgreSQL + pgvector", proficiency: 85, icon: ["fas", "database"] },
      { name: "MySQL", proficiency: 80, icon: ["fas", "database"] },
      { name: "Pinecone", proficiency: 75, icon: ["fas", "star"] },
      { name: "ChromaDB", proficiency: 75, icon: ["fas", "layer-group"] },
      { name: "Firebase", proficiency: 70, icon: ["fas", "database"] },
    ],
    frontend: [
      { name: "React", proficiency: 70, icon: ["fab", "react"] },
      { name: "HTML/CSS", proficiency: 80, icon: ["fab", "html5"] },
      { name: "JavaScript", proficiency: 80, icon: ["fab", "square-js"] },
      { name: "Bootstrap", proficiency: 85, icon: ["fab", "bootstrap"] },
      { name: "Flutter", proficiency: 75, icon: ["fab", "flutter"] },
    ],
  };

  return (
    <div className="section bg-tech-stack" id="techstack">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Technical Skills</h2>
          <p className="lead text-muted">
            Detailed breakdown of expertise across different technology domains
          </p>
        </div>

        {/* Backend Technologies */}
        <div className="tech-category mb-5">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-server me-2"></i>Backend Development
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.backend.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML Technologies */}
        <div className="tech-category mb-5">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-brain me-2"></i>AI & Machine Learning
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.aiml.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>

        {/* Data & ETL */}
        <div className="tech-category mb-5">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-wind me-2"></i>Data Engineering & ETL
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.data.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & Infrastructure */}
        <div className="tech-category mb-5">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-cloud me-2"></i>Cloud & Infrastructure
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.cloud.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="tech-category mb-5">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-database me-2"></i>Databases & Vector Search
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.databases.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="tech-category">
          <div className="category-header">
            <h3 className="category-title">
              <i className="fas fa-code me-2"></i>Frontend Technologies
            </h3>
            <span className="category-badge">5 Technologies</span>
          </div>
          <div className="row">
            {techStackData.frontend.map((tech, index) => (
              <div key={index} className="col-lg-6 col-xl-6">
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
