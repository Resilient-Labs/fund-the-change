import { Button, Card } from "react-bootstrap";

const OrgCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.props.imageLink} />
      <Card.Body>
        <Card.Title>Name: {props.props.name}</Card.Title>
        <Card.Text>Type: {props.props.type}</Card.Text>
        <Card.Text>Description: {props.props.description}</Card.Text>
        <Card.Text>Website: {props.props.website}</Card.Text>
        <Button href={"/stripe/" + props.props._id} variant="primary"> Donate Now</Button>
      </Card.Body>
    </Card>
  );
};

export default OrgCard;
