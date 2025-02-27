import { Container, Row, Col } from "react-bootstrap";

import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { useState } from "react";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <Layout activeRoute={"/kontakt"}>
        <Container className="my-lg-5 my-2 py-5 contact-container">
          <Row>
            <Col
              lg={4}
              className="cstom-box-shadow   d-flex flex-column  gap-5 ps-5"
            >
              <div className="mb-2 d-flex flex-column  mt-5   ">
                <p className="contact-info-data"> e-mail</p>
                <a
                  href="mailto:projekat@projekat.ba"
                  className="text-black text-decoration-none info-data"
                >
                  projekat@projekat.ba
                </a>
              </div>
              <div className="mb-2 d-flex flex-column    ">
                <p className="contact-info-data"> telefon</p>
                <a
                  href="tel:+38765231233"
                  className="text-black text-decoration-none info-data"
                >
                  +387 65 231 233
                </a>
                <a
                  href="tel:+38755424113"
                  className="text-black text-decoration-none"
                >
                  +387 55 424 113
                </a>
              </div>
              <div className="mb-2 d-flex flex-column ">
                <p className="contact-info-data"> adresa</p>
                <a
                  href="https://maps.app.goo.gl/Jvrx4dHccEUrTng87"
                  className="text-black text-decoration-none info-data"
                  target="_blank"
                >
                  {" "}
                  Meše Selimovića 24a <br /> Bijeljina
                </a>{" "}
              </div>
            </Col>
            <Col
              lg={8}
              className="d-none d-lg-flex  align-items-center justify-content-center"
            >
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
      {/* <Footer /> */}
    </>
  );
};
