import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Modal, Row } from "react-bootstrap";

const Lightbox = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const topRef = useRef(null);
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (!images.length) {
    return <span class="loader"></span>;
  }

  return (
    <>
      {/* <div
        className="d-flex flex-column gap-3 align-items-center justify-content-center   py-5 "
        ref={topRef}
      >
        <div className=" cursor-pointer   " onClick={() => setIsOpen(true)}>
          <img src={mainImage} alt="Main" className="main-image-lightbox " />
        </div>
        <div
          className="d-flex  gap-2 overflow-hidden thumbnails align-items-center justify-content-center"
          onClick={scrollToTop}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer  "
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className="img-thumbnails  "
              />
            </div>
          ))}
        </div>
      </div> */}
      <Container ref={topRef}>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            lg={8}
            className=" cursor-pointer   "
            onClick={() => setIsOpen(true)}
          >
            <img src={mainImage} alt="Main" className="main-image-lightbox " />
          </Col>
          <Col
            lg={4}
            className="d-flex  gap-2 overflow-hidden thumbnails align-items-center justify-content-center "
            onClick={scrollToTop}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer  "
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="img-thumbnails  "
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Body className="text-center">
          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={() => setIsOpen(false)}
          ></button>
          <img src={mainImage} alt="Enlarged" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Lightbox;
