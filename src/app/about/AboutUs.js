import { Footer } from "../../layout/Footer";
import { Layout } from "../../layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <>
      <Layout activeRoute={"/o-nama"}>
        <div className="about-us">
          <p>
            Projekat.ba nastao je 2015. godine kao arhitektonski dio firme doo
            „Vamark“ koja je nastala 1990. godine. <br /> <br />
            Za potrebe izrade tehničke dokumentacije imamo stalan tim
            saradnika-građevinskih, elektro i mašinskih inženjera, kao i
            agencije za geodetska snimanja.
            <br /> <br />
            Naš tim ima iskustva u projektovanju novih objekata, rekonstrukciji
            i adaptaciji postojećih kao i legalizaciji objekata izgrađenih bez
            građevinske dozvole. <br /> <br />
            Veliki dio našeg poslovanja čini i rad na enterijerima gdje
            sarađujemo sa odličnim izvođačima iz ove oblasti, kao i na poslovima
            brendiranja i dizajna.
            <br />
            <br />
            Ako je neko ovo čitao do kraja dodao bih da je ovo studio koji je
            osnovao arhitekta opšte prakse, koji pokušava da pomiri investitore
            sa arhitekturom.
          </p>
          <h3 className="my-5"> Naš tim</h3>
          <Container>
            <Row>
              <Col
                md={3}
                sm={6}
                className="d-flex-col align-items-center p-md-0 p-2"
              >
                <img src="/images/o_nama/marko.jpg" className="img-about" />
                <div className="d-flex-col align-items-end justify-content-end">
                  <p className="m-0 fs-11px"> // Marko Vukićević </p>{" "}
                  <p className="m-0 fs-10px"> Mast. inž. arh. </p>
                  <p className="m-0 fs-10px"> projekat@projekat.ba</p>
                </div>
              </Col>
              <Col
                md={3}
                sm={6}
                className="d-flex-col align-items-center p-md-0 p-2"
              >
                <img src="/images/o_nama/nevena.jpg" className="img-about" />
                <div className="d-flex-col align-items-end justify-content-end ">
                  <p className="m-0 fs-11px"> // Nevena Cerovina</p>{" "}
                  <p className="m-0 fs-10px"> Mast. inž. arh. </p>
                  <p className="m-0 fs-10px"> nevena@projekat.ba</p>
                </div>
              </Col>
              <Col
                md={3}
                sm={6}
                className="d-flex-col align-items-center p-md-0 p-2"
              >
                <img src="/images/o_nama/dragana.jpg" className="img-about" />
                <div className="d-flex-col align-items-end justify-content-end">
                  <p className="m-0 fs-11px"> // Dragana Panić </p>{" "}
                  <p className="m-0 fs-10px"> Dipl. inž. arh. </p>
                  <p className="m-0 fs-10px"> dragana@projekat.ba</p>
                </div>
              </Col>
              <Col
                md={3}
                sm={6}
                className="d-flex-col align-items-center p-md-0 p-2"
              >
                <img src="/images/o_nama/lidija.jpg" className="img-about" />
                <div className="d-flex-col align-items-end justify-content-end">
                  <p className="m-0 fs-11px"> // Lidija Vukićević</p>{" "}
                  <p className="m-0 fs-10px"> Dipl. ekonomista </p>
                  <p className="m-0 fs-10px"> lidija@projekat.ba</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
      {/* <Footer className={"mt-5 pt-2 footer-container "} /> */}
    </>
  );
};
