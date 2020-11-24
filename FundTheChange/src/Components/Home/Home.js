import React, {Component} from 'react'
import { Carousel, Button} from 'react-bootstrap';
import "./Home.css";
// Test comment
//Testtttt
 class Home extends Component{
     render(){
        return (
            <div className="HomeContainer">
              <div className="carousel">
                <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/fOaVk62.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Donate to Grassroots Organizations</h1>
      <Button>Donate Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/l8v2szc.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Help those in need.</h3>
      <Button>Donate Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bgImage"
      src="https://i.imgur.com/qssRXCr.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Help students in your community</h3>
      <Button>Donate Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            {/* <Image className="image"src="https://i.imgur.com/qUt8EPp.png" fluid /> */}
            </div>

          <div className="topSection gray">
          <div className="topLeft"> 
            <h2 className="sectionParagraph">Make a change in your community</h2>
            <p className="sectionParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          
            </div>
            <div className="topRight">
            <img className="LeftImage" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80" alt="Make a change"/>
          </div>
          </div>

          <div className="topSection">
          
            <div className="topRight">
            <img className="LeftImage" src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2583&q=80" alt="Donate"/>
          </div>

          <div className="topLeft"> 
            <h2 className="sectionParagraph">Don't know how to contribute?</h2>
            <p className="sectionParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          
            </div>
          </div>


</div>
        )
     }

}

export default Home;
