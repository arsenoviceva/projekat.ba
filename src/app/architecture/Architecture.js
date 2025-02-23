import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../layout/Layout";
import { Footer } from "../../layout/Footer";
import { Card } from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/images/arhitektura/autobuska_stanica/1.jpg",
    text: "// Autobuska Stanica | Bijeljina 2019",
    folder: "autobuska_stanica",
    imgCount: 7,
  },
  {
    id: 2,
    src: "/images/arhitektura/sava_centar/1.jpg",
    text: "// Sava Centar | Bijeljina 2022",
    folder: "sava_centar",
    imgCount: 9,
  },
  {
    id: 3,
    src: "/images/arhitektura/stanisic_kuca/1.jpg",
    text: "// Porodična kuća | Bijeljina 2024",
    folder: "stanisic_kuca",
    imgCount: 7,
  },
  {
    id: 4,
    src: "/images/arhitektura/rb_centar/1.jpg",
    text: "// RB izgradnja | Bijeljina 2022",
    folder: "rb_centar",
    imgCount: 4,
  },
  {
    id: 5,
    src: "/images/arhitektura/vodoprivreda/1.jpg",
    text: "// Zavod za vodoprivredu | Bijeljina 2022",
    folder: "vodoprivreda",
    imgCount: 5,
  },
  {
    id: 6,
    src: "/images/arhitektura/finalprom/1.jpg",
    text: "// Finalprom  | Bijeljina 2022",
    folder: "finalprom",
    imgCount: 4,
  },
  {
    id: 7,
    src: "/images/arhitektura/veselinovic_golija/1.jpg",
    text: "// Elvaco MetPro | Bijeljina 2021",
    folder: "veselinovic_golija",
    imgCount: 5,
  },
  {
    id: 8,
    src: "/images/arhitektura/trb_ristic/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2021",
    folder: "trb_ristic",
    imgCount: 6,
  },
  {
    id: 9,
    src: "/images/arhitektura/promenada_3/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2024",
    folder: "promenada_3",
    imgCount: 4,
  },
  {
    id: 10,
    src: "/images/arhitektura/promenada/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2020",
    folder: "promenada",
    imgCount: 3,
  },
  {
    id: 11,
    src: "/images/arhitektura/zgrada_mihajlovic_invest/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2020",
    folder: "zgrada_mihajlovic_invest",
    imgCount: 4,
  },
  {
    id: 12,
    src: "/images/arhitektura/sabac/1.jpg",
    text: "// Porodični objekat | Šabac 2021",
    folder: "sabac",
    imgCount: 5,
  },
  {
    id: 13,
    src: "/images/arhitektura/pribisic/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2019",
    folder: "pribisic",
    imgCount: 5,
  },
  {
    id: 14,
    src: "/images/arhitektura/hotel_stara_hercegovina/1.jpg",
    text: "/ Zdravstveno turistički centar | Banja Vrućica 2020",
    folder: "hotel_stara_hercegovina",
    imgCount: 5,
  },
  {
    id: 15,
    src: "/images/arhitektura/lazarevic/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2020",
    folder: "lazarevic",
    imgCount: 4,
  },
  {
    id: 16,
    src: "/images/arhitektura/blagojevic_kuca/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2020",
    folder: "blagojevic_kuca",
    imgCount: 7,
  },
  {
    id: 17,
    src: "/images/arhitektura/triomax/1.jpg",
    text: "// Triomax | Bijeljina 2020",
    folder: "triomax",
    imgCount: 3,
  },
  {
    id: 18,
    src: "/images/arhitektura/intergaj_racanska/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2020",
    folder: "intergaj_racanska",
    imgCount: 6,
  },
  {
    id: 19,
    src: "/images/arhitektura/zubart/1.jpg",
    text: "// Poslovni objekat | Bijeljina 2019",
    folder: "zubart",
    imgCount: 3,
  },
  {
    id: 20,
    src: "/images/arhitektura/huerliman/1.jpg",
    text: "// Stambeni objekat | Zvornik 2019",
    folder: "huerliman",
    imgCount: 3,
  },
  {
    id: 21,
    src: "/images/arhitektura/pelemis/1.jpg",
    text: "// Poslovni objekat | Bijeljina 2019",
    folder: "pelemis",
    imgCount: 4,
  },
  {
    id: 22,
    src: "/images/arhitektura/stevanovic/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2017",
    folder: "stevanovic",
    imgCount: 6,
  },
  {
    id: 23,
    src: "/images/arhitektura/tesici_kuca/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2018",
    folder: "tesici_kuca",
    imgCount: 4,
  },
  {
    id: 24,
    src: "/images/arhitektura/finalprom_2/1.jpg",
    text: "// Finalprom | Bijeljina 2018",
    folder: "finalprom_2",
    imgCount: 6,
  },
  {
    id: 25,
    src: "/images/arhitektura/markovic/1.jpg",
    text: "// Stambeni objekat | Bijeljina 2017",
    folder: "markovic",
    imgCount: 6,
  },
  {
    id: 26,
    src: "/images/arhitektura/intergaj/1.jpg",
    text: "// Stambeno poslovni objekat | Bijeljina 2018",
    folder: "intergaj",
    imgCount: 2,
  },
  {
    id: 27,
    src: "/images/arhitektura/g&s/1.jpg",
    text: "// Poslovni objekat | Bijeljina 2018",
    folder: "g&s",
    imgCount: 3,
  },
  {
    id: 28,
    src: "/images/arhitektura/slot_games/1.jpg",
    text: "// Poslovni objekat | Bijeljina 2018",
    folder: "slot_games",
    imgCount: 4,
  },
];

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
            {images?.map((image) => {
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

      <Footer />
    </>
  );
};
