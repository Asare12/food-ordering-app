import Carousel from "react-bootstrap/Carousel";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food4.jpeg";
import food3 from "../images/food5.jpeg";
import "../componentsCss/carousel.css";

export default function carouselSlider() {
  return (
    <div>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food1}
      alt="First slide"
      width="1100" height="400"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food2}
      alt="Second slide"
      width="1100" height="400"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={food3}
      alt="Third slide"
      width="1100" height="400"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}
