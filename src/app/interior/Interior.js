import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { enterijeriInfo } from "../../info/enterijeriInfo";

export const Interior = () => {
  const navigate = useNavigate();

  const onClickHandler = (folder, imgCount) => {
    navigate(`/enterijeri/${folder}/${imgCount}`);
  };
  return (
    <>
      <Layout activeRoute={"/enterijeri"}>
        <Container className="">
          <Row className="p-lg-4 p-0">
            {enterijeriInfo?.map((image) => {
              return (
                <Col xs={6} className="p-lg-2 p-0" key={image.id}>
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
