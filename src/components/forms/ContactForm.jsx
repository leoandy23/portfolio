import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const initialValues = {
    name: "",
    email: "",
    comments: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    comments: Yup.string().required("comments is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/leoandy28aa@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success === "true") {
          handleShowModal();
          setTimeout(() => {
            handleCloseModal();
          }, 3000);
        }
        resetForm();
      } else {
        console.error("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <div className="my-2">
      <div className="w-100 p-4 shadow mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ touched, errors, isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control rounded-0 border-0 border-bottom ${
                        errors.name && touched.name
                          ? "is-invalid border-danger"
                          : "border-secondary"
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control rounded-0 border-0 border-bottom ${
                        errors.email && touched.email
                          ? "is-invalid border-danger"
                          : "border-secondary"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="comments" className="form-label">
                      Comments
                    </label>
                    <Field
                      placeholder="Enter your comments"
                      as="textarea"
                      id="comments"
                      name="comments"
                      className={`form-control rounded-0  ${
                        errors.comments && touched.comments
                          ? "is-invalid border-danger"
                          : "border-secondary"
                      }`}
                      style={{
                        height: "150px",
                        resize: "none",
                      }}
                    />
                    <ErrorMessage
                      name="comments"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        minWidth: "200px",
                      }}
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div
                          className="spinner-border"
                          role="status"
                          style={{
                            width: "1.1rem",
                            height: "1.1rem",
                            display: "inline-block",
                            verticalAlign: "text-bottom",
                          }}>
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Send comments"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Successfull email sending</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            The email was sent successfully you will soon receive a response.
            <FontAwesomeIcon
              icon={["far", "check-circle"]}
              className="text-success ms-2"
              size="5x"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactForm;
