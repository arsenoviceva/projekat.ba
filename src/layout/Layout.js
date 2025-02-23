import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "./Header";

const routes = [
  {
    id: 1,
    path: "/arhitektura",
    name: "arhitektura",
  },
  {
    id: 2,
    path: "/enterijeri",
    name: "enterijeri",
  },
  {
    id: 3,
    path: "/trzni_centri",
    name: "tržni centri",
  },
  {
    id: 4,
    path: "/o-nama",
    name: "o nama",
  },
  {
    id: 5,
    path: "/klijenti",
    name: "klijenti",
  },
  {
    id: 6,
    path: "/kontakt",
    name: "kontakt",
  },
];

export const Layout = ({ activeRoute, children }) => {
  const navigate = useNavigate;

  const [isVisible, setIsVisible] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className="mt-lg-5">
      <div className="d-lg-flex d-none align-items-center justify-content-center">
        <a href="/" className="text-decoration-none text-black">
          {" "}
          <img src="/images/biglogo.png" />{" "}
        </a>
      </div>
      <Row>
        <Col lg={2} className=" d-lg-block d-none  ">
          <div className="position-fixed bg-white">
            <div className="p-1 pt-4 gap-2 d-flex-col align-items-end">
              {routes?.map((route, index) => {
                return (
                  <NavLink
                    to={route.path}
                    className="text-decoration-none"
                    key={index}
                  >
                    <p
                      className={
                        activeRoute === route?.path
                          ? "navbar-icons-active"
                          : "navbar-icons"
                      }
                    >
                      {route.name}
                    </p>
                  </NavLink>
                );
              })}
            </div>
            <div className="d-flex align-items-end justify-content-end mb-3">
              <img src="/images/Line3.png" className="line" />
            </div>

            <div className="d-flex-col align-items-end gap-3">
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

              <a
                href="mailto:projekat@projekat.ba"
                className="text-black text-decoration-none"
              >
                <FaEnvelope className="fs-5  " />
              </a>

              <a
                href="tel:+38765231233"
                className="text-black text-decoration-none"
              >
                <FaPhoneAlt className="fs-5  " />
              </a>

              <a
                href="https://maps.app.goo.gl/Jvrx4dHccEUrTng87"
                className="text-black text-decoration-none"
                target="_blank"
              >
                <FaLocationDot className="fs-5  " />
              </a>
            </div>
          </div>
        </Col>
        <Col lg={10} className="h-100 p-0 d-lg-block d-none">
          <div className="h-100">{children}</div>
        </Col>
        <div className="d-lg-none d-block">
          <Header />
          <div className="h-100">{children}</div>
        </div>
      </Row>

      <img
        className="btnup"
        id="scrollUpButton"
        style={{
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        src="/images/btntop.png"
        onClick={scrollToTop}
      />
    </Container>
  );
};
