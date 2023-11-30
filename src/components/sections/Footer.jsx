import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-custom-dark text-white p-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="text-center text-md-start my-2">
              <h4>My contact information</h4>
            </div>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://maps.app.goo.gl/PtJ4QNRCsTPpzmCz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon="map-marker-alt"
                    className="text-light me-2"
                  />
                  Quito, Ecuador
                </a>
              </li>
              <li>
                <a
                  href="tel: +593 999 011 921"
                  className="text-decoration-none text-light">
                  <FontAwesomeIcon icon="phone" className="text-light me-2" />
                  +593 999 011 921
                </a>
              </li>
              <li>
                <a
                  href="mailto:
                info@example.com"
                  className="text-decoration-none text-light">
                  <FontAwesomeIcon
                    icon="envelope"
                    className="text-light me-2"
                  />
                  leoandy28aa@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-center my-2">
              <h4>My social networks</h4>
            </div>
            <ul className="list-unstyled d-flex justify-content-evenly">
              <li>
                <a
                  href="https://www.facebook.com/andy.alba.1232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/leonel-otavalo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/leonel_otavalo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/leoandy23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light">
                  <FontAwesomeIcon
                    icon={["fab", "x-twitter"]}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leoandy23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
