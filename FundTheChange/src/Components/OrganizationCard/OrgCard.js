import { Button, Card } from "react-bootstrap";
import './OrgCard.css'

const OrgCard = (props) => {
  return (
    <Card className='Card' style={{ width: '80vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', overflow: 'auto'}} >
      <Card.Img className='Card-img' variant="top" src={props.props.imageLink} style={{objectFit: 'cover', width: '100%', height: '27vh'}}/>
      <Card.Body>
        <Card.Title className='Card-title'>Name: {props.props.name}</Card.Title>
        <Card.Text className='Card-text'>Type: {props.props.type}</Card.Text>
        <Card.Text className='Card-text'>Description: {props.props.description}</Card.Text>
        <Card.Text className='Card-text'>Website: {props.props.website}</Card.Text>
        <Button variant="primary">Donate</Button>
        <Button variant="primary">+</Button>
      </Card.Body>
    </Card>
  );
};

export default OrgCard;
