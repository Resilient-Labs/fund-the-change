import React, { useState, useEffect } from 'react'
import './About.css'
import { Button, Image } from 'react-bootstrap';


const About = () => {
  return (
<div className="container3">

<h1>About Us</h1>
<Image className="image" src="https://i.imgur.com/luOJhI9.png" fluid />

<h4>Our Mission</h4>
<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
<div className="callToAction">

  <h2>Donate</h2>
  <h4>Choose to make a difference</h4>
  <Button className="button2">Give Now</Button>
</div>
</div>


  )
}

export default About;
