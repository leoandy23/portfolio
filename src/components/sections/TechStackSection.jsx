import React from "react";
import TechStackCard from "../pure/TechStackCard";
import "../../styles/TechStack.css";
import TECHS from "../../models/technologies.enum";

const TechStackSection = () => {
  const techStackData = {
    backend: [
      { key: "NESTJS", name: "NestJS", proficiency: 85, icon: TECHS.NESTJS.type === "fab" ? ["fab", "node-js"] : ["fas", "server"] },
      { key: "FASTAPI", name: "Python (FastAPI)", proficiency: 90, icon: ["fab", "python"] },
      { key: "FLASK", name: "Python (Flask/Django)", proficiency: 85, icon: ["fab", "python"] },
      { key: "NODEJS", name: "Node.js", proficiency: 75, icon: ["fab", "node-js"] },
      { key: "LARAVEL", name: "Laravel", proficiency: 80, icon: ["fab", "laravel"] },
    ],
    aiml: [
      { key: "LANGCHAIN", name: "LangChain", proficiency: 80, icon: ["fas", "link"] },
      { key: "OPENAI", name: "OpenAI API", proficiency: 85, icon: ["fas", "brain"] },
      { key: "EMBEDDINGS", name: "Embeddings & RAG", proficiency: 85, icon: ["fas", "database"] },
      { key: "SEMANTIC_SEARCH", name: "Semantic Search", proficiency: 80, icon: ["fas", "search"] },
      { key: "RECOMMENDATION", name: "Recommendation Systems", proficiency: 75, icon: ["fas", "star"] },
    ],
    data: [
      { key: "AIRFLOW", name: "Apache Airflow", proficiency: 75, icon: ["fas", "wind"] },
      { key: "PYSPARK", name: "PySpark", proficiency: 70, icon: ["fas", "fire"] },
      { key: "PANDAS", name: "Pandas & NumPy", proficiency: 85, icon: ["fab", "python"] },
      { key: "DATABRICKS", name: "Databricks", proficiency: 70, icon: ["fas", "database"] },
      { key: "SQL", name: "SQL", proficiency: 85, icon: ["fas", "database"] },
    ],
    cloud: [
      { key: "GCP", name: "Google Cloud Platform", proficiency: 80, icon: ["fab", "google"] },
      { key: "AZURE", name: "Microsoft Azure", proficiency: 75, icon: ["fab", "microsoft"] },
      { key: "AWS", name: "Amazon AWS", proficiency: 80, icon: ["fab", "aws"] },
      { key: "TERRAFORM", name: "Terraform", proficiency: 80, icon: ["fas", "cube"] },
      { key: "DOCKER", name: "Docker", proficiency: 85, icon: ["fab", "docker"] },
    ],
    databases: [
      { key: "POSTGRESQL", name: "PostgreSQL + pgvector", proficiency: 85, icon: ["fas", "database"] },
      { key: "MYSQL", name: "MySQL", proficiency: 80, icon: ["fas", "database"] },
      { key: "PINECONE", name: "Pinecone", proficiency: 75, icon: ["fas", "star"] },
      { key: "CHROMADB", name: "ChromaDB", proficiency: 75, icon: ["fas", "layer-group"] },
      { key: "FIREBASE", name: "Firebase", proficiency: 70, icon: ["fas", "database"] },
    ],
    frontend: [
      { key: "REACT", name: "React", proficiency: 70, icon: ["fab", "react"] },
      { key: "HTML", name: "HTML/CSS", proficiency: 80, icon: ["fab", "html5"] },
      { key: "JS", name: "JavaScript", proficiency: 80, icon: ["fab", "square-js"] },
      { key: "BOOTSTRAP", name: "Bootstrap", proficiency: 85, icon: ["fab", "bootstrap"] },
      { key: "FLUTTER", name: "Flutter", proficiency: 75, icon: ["fab", "flutter"] },
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
