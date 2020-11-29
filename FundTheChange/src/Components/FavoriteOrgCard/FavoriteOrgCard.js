import React, {Component} from 'react'
import { Button,Card, CardDeck } from 'react-bootstrap';
import './FavoriteOrgCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class FavoriteOrgCard extends Component{
  render(){
    return (
      <div>
      <div className="cardHolder">
      <CardDeck>
    <Card style={{border: '2px solid rgb(141,174,113)'}}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a a  a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.!!!
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Donate Again</Button>
      </Card.Footer>
    </Card>
  </CardDeck>
      </div>
      </div>
    )
  }
}
export default FavoriteOrgCard;
<Button variant="primary">Donate Again</Button>;
