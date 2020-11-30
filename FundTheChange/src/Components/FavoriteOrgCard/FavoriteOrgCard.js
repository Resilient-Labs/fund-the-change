import React, { useEffect, useState } from 'react'
import { Button, Card, CardDeck } from 'react-bootstrap';
import './FavoriteOrgCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FavoriteOrgCard = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/favorites")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data.result);
      });
  }, [props.user]); //<--Keep this array empty for only one update

  return (
    favorites.map((x, i) => {
      return <div key={i} favorites={x}>
        <div className="cardHolder">
        <CardDeck>
          <Card style={{border: '2px solid rgb(141,174,113)'}}>
            <Card.Img variant="top" src={`${x.imageLink}`} style={{backgroundImage: 'contain', height: '300px', width: '454px'}}/>
            <Card.Body>
              <Card.Title>{x.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Button href={"/stripe/" + x._id} variant="primary">Donate!</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        </div>
      </div>
    })
  )
}

export default FavoriteOrgCard;
