import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { GetUrl, GetUrl2 } from "../../functions/GetUrl";
import Lightbox from "../../components/lightbox/Lightbox";
import { enterijeriInfo } from "../../info/enterijeriInfo";
import { trznicentri } from "../../info/trznicentri";
import { arhitekturaInfo } from "../../info/arhitekturaInfo";

export const ProjectBody = () => {
  const param = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = window.location.href;
  const putanja = GetUrl2(url);
  const folder = GetUrl(url);
  const paramValues = Object.entries(param).slice(-1)[0];

  useEffect(() => {
    const fetchImages = async () => {
      const imageCount = paramValues.slice(-1)[0];
      const imageList = [];

      for (let i = 1; i <= imageCount; i++) {
        const jpgPath = `/images/${putanja}/${folder}/${i}.jpg`;
        const pngPath = `/images/${putanja}/${folder}/${i}.png`;

        const jpgExists = await checkImageExists(jpgPath);
        if (jpgExists) {
          imageList.push(jpgPath);
          continue;
        }

        const pngExists = await checkImageExists(pngPath);
        if (pngExists) {
          imageList.push(pngPath);
        }
      }

      setImages(imageList);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  return (
    <>
      <Layout activeRoute={folder}>
        <Container className="project-container">
          <Row className="p-lg-4 p-0">
            {loading ? (
              <div className="loading-spinner">
                Fotografije se učitavaju ...{" "}
              </div>
            ) : (
              <Lightbox images={images} />
            )}
            {arhitekturaInfo?.map((arhitektura, index) =>
              arhitektura.folder === folder ? (
                <div key={index} className="info-klijent">
                  {arhitektura.info.split(",").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              ) : null
            )}
            {enterijeriInfo?.map((enterijer, index) =>
              enterijer.folder === folder ? (
                <div key={index} className="info-klijent">
                  {enterijer.info.split(",").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              ) : null
            )}
            {trznicentri?.map((mall, index) =>
              mall.folder === folder ? (
                <div key={index} className="info-klijent">
                  {mall.info.split(",").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              ) : null
            )}
          </Row>
        </Container>
      </Layout>
      {/* <Footer className={"mt-2 pt-2 footer-container-btn"} /> */}
    </>
  );
};
