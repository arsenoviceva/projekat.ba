import { useEffect, useState } from "react";
import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

export const Clients = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageCount = 71;
    const imageList = Array.from(
      { length: imageCount },
      (_, i) => `/images/klijenti/${i + 1}.jpg`
    );
    setImages(imageList);
  }, []);

  return (
    <div>
      <Layout activeRoute={"/klijenti"}>
        <Container className="p-lg-5">
          <Row>
            {images.map((src, index) => {
              return (
                <Col
                  lg={2}
                  md={3}
                  xs={4}
                  className=" p-2 d-flex align-items-center justify-content-center"
                  key={index}
                >
                  <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
      {/* <Footer className={"mt-5 pt-2 footer-container "} /> */}
    </div>
  );
};
