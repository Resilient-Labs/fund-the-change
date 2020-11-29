import React, {Component} from 'react'
import { Figure } from 'react-bootstrap';
import './HighlightedOrg.css'
// import Cat from './cat.jpeg'
import OrganizationCardContainer from '../OrganizationCard/OrganizationCardContainer'

 class HighlightedOrg extends Component{
     render(){
        return (
          <div className="test">
            <div className='highlighted'>
              <a href='/organizations/organizations._id'>
              {/* BACKEND ROUTE FOR EACH ORGANIZATION */}
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.749xh;0,0.154xh&resize=980:*" alt='Cat' width={171} height={180} />
              </a>
              <Figure>
                <Figure.Caption>
                  Highlighted org description
                </Figure.Caption>
              </Figure>
            </div>
                <OrganizationCardContainer />
          </div>
        )
     }
}

export default HighlightedOrg;
