import Card from "react-bootstrap/Card";
import food2 from "../images/food2.jpeg";

const DishesCards = props => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{width: "286", height: "200"}} variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default DishesCards;
