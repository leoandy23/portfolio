import React from "react";
import ServiceCard from "../pure/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Backend API Development",
      icon: "server",
      description:
        "Robust REST APIs using NestJS and Python (FastAPI/Flask). Advanced authentication, database optimization, microservices architecture, and scalable system design for production environments.",
    },
    {
      title: "AI/ML Solutions",
      icon: "brain",
      description:
        "LLM-powered chatbots, RAG systems, semantic search, embedding-based retrieval, and intelligent recommendation engines using LangChain and OpenAI. End-to-end AI solution design.",
    },
    {
      title: "Data Engineering & ETL",
      icon: "wind",
      description:
        "Apache Airflow pipelines, PySpark jobs, data transformation, ETL orchestration, vectorization of unstructured data, and complex data workflows at scale.",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: "cloud",
      description:
        "Multi-cloud deployment (GCP, Azure, AWS), Infrastructure as Code (Terraform), Docker containerization, Kubernetes orchestration, and database provisioning.",
    },
    {
      title: "Full-Stack Development",
      icon: "code",
      description:
        "End-to-end web applications combining modern frontends with production-grade backends. React, Next.js, and custom full-stack solutions.",
    },
    {
      title: "Geospatial & Analytics",
      icon: "map",
      description:
        "Geographic data processing (PostGIS), spatial analysis, custom indicators generation, data visualization with Leaflet, and geospatial intelligence.",
    },
  ];

  return (
    <div className="section bg-custom-gradient" id="services">
      <div className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold section-title">Services & Expertise</h2>
          <p className="lead mb-5">
            Leveraging cutting-edge technologies to deliver innovative solutions
          </p>

          <div className="row align-items-start justify-content-center">
            {services.map((service, index) => (
              <ServiceCard content={service} key={index}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
