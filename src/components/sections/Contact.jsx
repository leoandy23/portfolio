import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../forms/ContactForm";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="container my-5">
        <div className="text-center">
          <h1 className="section-title">Contact Me</h1>
        </div>

        <div className="row">
          <div className="col-12 col-md-4  p-3">
            <div className="bg-white shadow p-3 ">
              <a
                href="https://wa.link/bj6gp5"
                className="d-flex flex-column align-items-center text-decoration-none"
                target="_blank"
                rel="noreferrer">
                <span className="fw-bold text-dark">Whatsapp</span>
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  style={{ color: "#25D366", fontSize: "2.5rem" }}
                />
                <small>
                  <i>+593 999 011 921</i>
                </small>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4  p-3">
            <div className="bg-white shadow p-3">
              <a
                href="mailto: leoandy28aa@gmail.com"
                className="d-flex flex-column align-items-center text-decoration-none">
                <span className="fw-bold text-dark">Email</span>
                <FontAwesomeIcon
                  icon={["far", "envelope"]}
                  style={{
                    color: "var(--blue-ribbon-500)",
                    fontSize: "2.5rem",
                  }}
                />
                <small>
                  <i>leoandy28aa@gmail.com</i>
                </small>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4  p-3">
            <div className="bg-white shadow p-3">
              <a
                href="
              https://www.linkedin.com/in/leonel-otavalo/"
                className="d-flex flex-column align-items-center text-decoration-none"
                target="_blank"
                rel="noreferrer">
                <span className="fw-bold text-dark">LinkedIn</span>
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  style={{ color: "#0e76a8", fontSize: "2.5rem" }}
                />
                <small>
                  <i>Leonel Otavalo</i>
                </small>
              </a>
            </div>
          </div>
        </div>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
