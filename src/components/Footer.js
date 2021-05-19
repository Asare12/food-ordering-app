import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
    <Container>
      <p className="mx-auto" style={{ color: "white" }}>
        &copy;Copyright - All Rights Reserved - Food Ordering App 2021
      </p>
    </Container>
  </Navbar>
);

export default Footer;