import React from "react";
import ServiceCard from "../pure/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      icon: "mobile-screen", // You can change this to the icon of your choice
      description:
        "Development of native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "Web Development",
      icon: "laptop-code", // You can change this to the icon of your choice
      description:
        "Design and development of modern and responsive websites using the latest technologies.",
    },
    {
      title: "REST API",
      icon: "server", // You can change this to the icon of your choice
      description:
        "Creation of RESTful API using Flask and Python to build efficient and scalable web services.",
    },
    {
      title: "Database Management",
      icon: "database", // You can change this to the icon of your choice
      description:
        "Design, implementation, and optimization of databases to store and retrieve data efficiently.",
    },
    {
      title: "Machine Learning",
      icon: "robot", // You can change this to the icon of your choice
      description:
        "Implementation of machine learning algorithms and models for data analysis and predictions.",
    },
    {
      title: "Data Science",
      icon: "laptop-file", // You can change this to the icon of your choice
      description:
        "Exploration, analysis, and visualization of data to extract insights and support decision-making.",
    },
  ];

  return (
    <div className="section bg-custom-gradient" id="services">
      <div className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold section-title">What do I offer you?</h2>

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
