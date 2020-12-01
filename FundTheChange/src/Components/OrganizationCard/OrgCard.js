import { useEffect, useState} from 'react'
import { Button, Card } from "react-bootstrap";
import './OrgCard.css'

const OrgCard = (props) => {
  const [holding, setHolding] = useState([]);

  useEffect(() => {
    fetch("/api/donationAmount/org/" + props.props._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.monies, "\n--!!THIS IS ORG DONATION!!--");
        setHolding(data.monies);
      });
  }, [props.props._id]); //<--Keep this array empty for only one update


  return (
    <Card className='Card' style={{ width: '80vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', overflow: 'auto', marginBottom: '10px'}} >
      <Card.Img className='Card-img' variant="top" src={props.props.imageLink} style={{objectFit: 'cover', width: '100%', height: '500px'}}/>
      <Card.Body>
        <Card.Title className='Card-title' style= {{fontWeight: 'bold'}}>Name: {props.props.name}</Card.Title>
        <Card.Text className='Card-text'>Type: {props.props.type}</Card.Text>
        <Card.Text className='Card-text'>Description: {props.props.description}</Card.Text>
        <Card.Text className='Card-text'>Website: <a href={props.props.website} target="_blank" rel="noreferrer">{props.props.website}</a></Card.Text>
        <Card.Text className='Card-text' style={{ fontWeight: 'bold'}}>Total Donations to Date: ${holding}</Card.Text>
        <Button  href={"/stripe/" + props.props._id} variant="primary">Donate</Button>
        <form action={`/api/favorites/${props.props._id}`} method="post">
        <Button type="submit" variant="primary" style={{ marginTop:'2px'}}> + Favorite </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default OrgCard;
