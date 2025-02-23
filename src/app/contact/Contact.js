import { Container, Row, Col } from "react-bootstrap";

import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <Layout activeRoute={"/kontakt"}>
        <Container className="my-lg-5 my-2">
          <Row>
            <Col lg={4}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    rows="4"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn bg-black text-white w-100 "
                >
                  Pošalji
                </button>
              </form>
            </Col>
            <Col lg={8} className="d-none d-lg-flex mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.0787919695513!2d19.2218121!3d44.7588078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be91d681b8e15%3A0xab646f98e541a678!2sMe%C5%A1e%20Selimovi%C4%87a%2024a%2C%20Bijeljina%2076300!5e0!3m2!1sen!2sba!4v1739269392518!5m2!1sen!2sba"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-2"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Layout>
      <Footer />
    </>
  );
};
