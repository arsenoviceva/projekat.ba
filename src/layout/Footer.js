import { Row, Container, Col } from "react-bootstrap";
import { FaEnvelope, FaLocationDot, FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container className="mt-5 pt-2 footer-container">
      <Row className="justify-content-between">
        <Col className="d-md-none d-flex mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.0787919695513!2d19.2218121!3d44.7588078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be91d681b8e15%3A0xab646f98e541a678!2sMe%C5%A1e%20Selimovi%C4%87a%2024a%2C%20Bijeljina%2076300!5e0!3m2!1sen!2sba!4v1739269392518!5m2!1sen!2sba"
            width="600"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col xs={3}>
          <a href="/" className="text-decoration-none text-black">
            <img src="/images/logo2.png" className="footer-logo" />
          </a>
        </Col>
        <Col md={5} xs={9} className="info-col">
          <div className="mb-2 d-flex align-items-center  gap-3">
            <FaEnvelope className="fs-5 d-md-flex d-none" />

            <a
              href="mailto:projekat@projekat.ba"
              className="text-black text-decoration-none"
            >
              projekat@projekat.ba
            </a>
          </div>
          <div className="mb-2 d-flex align-items-center  gap-3">
            <FaPhoneAlt className="fs-5 d-md-flex d-none" />
            <a
              href="tel:+38765231233"
              className="text-black text-decoration-none"
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
          <div className="mb-2 d-flex align-items-center  gap-3">
            <FaLocationDot className="fs-5 d-md-flex d-none" />
            <a
              href="https://maps.app.goo.gl/Jvrx4dHccEUrTng87"
              className="text-black text-decoration-none"
              target="_blank"
            >
              {" "}
              Meše Selimovića 24a Bijeljina
            </a>{" "}
          </div>
        </Col>
        <Col
          md={4}
          className="d-md-flex d-none align-items-center justify-content-end"
        >
          <div className="d-flex align-items-center justify-content-end gap-3">
            <a
              href="https://www.facebook.com/projekat.ba/"
              className="text-decoration-none text-black"
              target="_blank"
            >
              <FaFacebook className="fs-5" />
            </a>
            <a
              href="https://www.instagram.com/projekat.ba/"
              className="text-decoration-none text-black"
              target="_blank"
            >
              <FaInstagram className="fs-5" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/marko-vukicevic-742615b/"
              className="text-decoration-none text-black"
              target="_blank"
            >
              <FaLinkedin className="fs-5" />
            </a>
          </div>
        </Col>
        <div className="d-flex flex-column align-items-center justify-content-center pt-2">
          <p className="m-0   info">
            projekat.ba © 2025 Sva prava zadržana Studio
          </p>
          <a
            className="m-0   info text-decoration-none text-black cursor-pointer"
            href="https://artisanstudio.ba/"
            target="_blank"
          >
            developed by <strong> Artisan studio </strong>
          </a>
        </div>
      </Row>
    </Container>
  );
};
