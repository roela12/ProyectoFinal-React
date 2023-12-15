import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidgetComponent } from "../CartWidgetComponent";
import { Link } from "react-router-dom";
import { linkStyles, mainLinkStyles } from "./NavBarComponent.Styles";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link style={mainLinkStyles} to={"/"}>
            Peso Ligero
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={linkStyles} to={"/"}>
                Inicio
              </Link>
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/category/pesas"} style={linkStyles}>
                  Pesas
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/barras"} style={linkStyles}>
                  Barras
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
