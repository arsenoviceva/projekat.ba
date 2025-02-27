import "./App.scss";

import { Footer } from "./layout/Footer";
import { Home } from "./home/Home";
import { Route, Routes } from "react-router-dom";
import { Architecture } from "./app/architecture/Architecture";
import { Interior } from "./app/interior/Interior";
import { Malls } from "./app/malls/Malls";
import { Contact } from "./app/contact/Contact";
import { AboutUs } from "./app/about/AboutUs";
import { Clients } from "./app/clients/Clients";
import { ProjectBody } from "./app/project body/ProjecBody";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arhitektura" element={<Architecture />} />
        <Route path="/enterijeri" element={<Interior />} />
        <Route path="/trzni_centri" element={<Malls />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/o-nama" element={<AboutUs />} />
        <Route path="/klijenti" element={<Clients />} />
        <Route
          path="/arhitektura/:folder/:imgCount"
          element={<ProjectBody />}
        />
        <Route path="/trzni_centri/:folder/:id" element={<ProjectBody />} />
        <Route path="/enterijeri/:folder/:id" element={<ProjectBody />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
