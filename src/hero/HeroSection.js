import { Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  const onClickHandler = (src) => {
    navigate(src);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3} className="column  ">
          <img
            src="/images/arhitektura/autobuska_stanica/1.jpg"
            className="hero-section-img cursor-pointer"
            onClick={() => onClickHandler("arhitektura/autobuska_stanica/7")}
          />
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            // Autobuska stanica
          </p>
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            {" "}
            Bijeljina 2019
          </p>
        </Col>
        <Col lg={3} className="column">
          <img
            src="/images/arhitektura/stanisic_kuca/1.jpg"
            className="hero-section-img cursor-pointer center"
            onClick={() => onClickHandler("arhitektura/stanisic_kuca/7")}
          />
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            // Stanišić
          </p>
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            {" "}
            Bijeljina 2024
          </p>
        </Col>

        <Col lg={3} className="column">
          <img
            src="/images/arhitektura/promenada_3/1.jpg"
            className="hero-section-img cursor-pointer "
            onClick={() => onClickHandler("arhitektura/promenada_3/4")}
          />
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            // Promenada faza 3
          </p>
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            {" "}
            Bijeljina 2024
          </p>
        </Col>
        <Col lg={3} className="column">
          <img
            src="/images/arhitektura/autobuska_stanica/1.jpg"
            className="hero-section-img cursor-pointer "
            onClick={() => onClickHandler("arhitektura/promenada_3/4")}
          />
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            // Karađorđeva
          </p>
          <p className="d-flex align-items center justify-content-end m-0 fs-13">
            {" "}
            Bijeljina 2019
          </p>
        </Col>
      </Row>
    </Container>
  );
};
