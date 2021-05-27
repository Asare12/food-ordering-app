import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../componentsCss/Navigationbar.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigationbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="custom-navbar-brand"> Logo</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="custom-navbar-nav">
            <LinkContainer to="/">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Home
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Menu
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  My Cart
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  About Us
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Login/SignUp
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
          </Nav>
          {/* <Nav className="ml-auto mt-2 mt-lg-0">
        {isAuthenticated ? (
          <Nav.Item onClick={handleLogout}>
            <Nav.Link href="/" className="custom-nav-link">
              Logout
            </Nav.Link>
          </Nav.Item>
        ) : (
          <>
            <LinkContainer to="/login">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Login
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>

            <LinkContainer to="/signUp">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Register
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
          </>
        )}
      </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
