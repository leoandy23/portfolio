import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <div className="my-2">
      <div className="w-100 p-4 shadow mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
            }, 2000);
          }}>
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          }) => (
            <Form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field
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
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className={`form-control rounded-0  ${
                        errors.message && touched.message
                          ? "is-invalid border-danger"
                          : "border-secondary"
                      }`}
                      style={{
                        height: "150px",
                        resize: "none",
                      }}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                      {isSubmitting ? "Sending" : "Send"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
