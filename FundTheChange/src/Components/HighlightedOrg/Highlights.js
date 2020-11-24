import React, {Component} from 'react'
import { Figure } from 'react-bootstrap';
import './HighlightedOrg.css'
import Cat from './cat.jpeg'

 class HighlightedOrg extends Component{
     render(){
        return (
          <div className="test">
            <img src={Cat} alt='Cat' width={171} height={180} />
            <Figure>
              <Figure.Caption>
                Highlighted org description
              </Figure.Caption>
            </Figure>
          </div>
        )
     }
}

export default HighlightedOrg;
