import React from "react";
import ServiceCard from "../pure/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: "code",
      description:
        "Development of complete web applications using modern technologies like React, NextJS, NestJS and Laravel for robust and scalable solutions.",
    },
    {
      title: "AI Solutions & Chatbots",
      icon: "robot",
      description:
        "Implementation of artificial intelligence solutions including chatbots, RAG systems and intelligent conversational assistants using LangChain and OpenAI API.",
    },
    {
      title: "Cloud Infrastructure",
      icon: "cloud",
      description:
        "Implementation of cloud solutions using Google Cloud, Azure, and AWS, with infrastructure as code through Terraform for reproducible environments.",
    },
    {
      title: "Backend API Development",
      icon: "server",
      description:
        "Creation of robust RESTful APIs using NestJS and Python for chatbot systems, recruitment platforms with matching algorithms and ETL processes.",
    },
    {
      title: "Mobile App Development",
      icon: "mobile-screen",
      description:
        "Development of cross-platform mobile applications using Flutter for iOS and Android with seamless user experiences.",
    },
    {
      title: "Geospatial Applications",
      icon: "map",
      description:
        "Processing and analysis of geographic data to generate social, technical, and economic indicators using Python and PostGIS.",
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
