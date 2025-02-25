import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuIcon from "../components/menu-icon/MenuIcon";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-white mt-lg-5 mt-3 mb-3"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="logo-img-header" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
          style={{ border: "none", boxShadow: "none" }}
        >
          <MenuIcon isOpen={isOpen} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="gap-xl-4 gap-2">
            <Nav.Link href="/arhitektura">arhitektura</Nav.Link>
            <Nav.Link href="/enterijeri">enterijeri</Nav.Link>
            <Nav.Link href="/trzni_centri">tržni centri</Nav.Link>
            <Nav.Link href="/o-nama">o nama</Nav.Link>
            <Nav.Link href="/klijenti">klijenti</Nav.Link>
            <Nav.Link href="/kontakt">kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
