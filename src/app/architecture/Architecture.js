import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../layout/Layout";
import { Footer } from "../../layout/Footer";
import { Card } from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { arhitekturaInfo } from "../../info/arhitekturaInfo";

export const Architecture = () => {
  const navigate = useNavigate();

  const onClickHandler = (folder, imgCount) => {
    navigate(`/arhitektura/${folder}/${imgCount}`);
  };

  return (
    <>
      <Layout activeRoute={"/arhitektura"}>
        <Container className="">
          <Row className="p-lg-4 p-0">
            {arhitekturaInfo?.map((image) => {
              return (
                <Col xs={6} className="p-lg-2 p-0 " key={image.id}>
                  <Card
                    key={image.id}
                    src={image.src}
                    text={image.text}
                    imgCount={image.imgCount}
                    imgFolder={image.folder}
                    onClickHandler={onClickHandler}
                    id={image.id}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>

      {/* <Footer className={"mt-5 pt-2 footer-container "} /> */}
    </>
  );
};
