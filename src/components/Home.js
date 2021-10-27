import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserService from "../services/user.service";
import CarouselSlider from "../components/carouselSlider";
import DishesCards from "../components/DishesCards";

import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import food3 from "../images/food3.jpeg";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <Container>
      <Row><Col> <CarouselSlider /> </Col></Row>
      <Row className="justify-content-md-center" style={{ paddingTop: "50px", paddingBottom: "50px" }}> 
        <Col md={4}><DishesCards src={food2}/> </Col>
        <Col md={4}><DishesCards src={food3}/> </Col>
        <Col md={4}><DishesCards src={food1}/> </Col>
         </Row>
      </Container>
    </div>
  );
};

export default Home;
