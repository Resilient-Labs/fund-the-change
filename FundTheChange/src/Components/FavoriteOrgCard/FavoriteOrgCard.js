import React, {Component} from 'react'
import { Button,Card, CardDeck } from 'react-bootstrap';


class FavoriteOrgCard extends Component{
  render(){
    return (
      <div className="cardHolder">
      <CardDeck>
    <Card>
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
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Donate Again</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button variant="primary">Donate Again</Button>
      </Card.Footer>
    </Card>
  </CardDeck>
      </div>
    )
  }
}
export default FavoriteOrgCard;
  <Button variant="primary">Donate Again</Button>
