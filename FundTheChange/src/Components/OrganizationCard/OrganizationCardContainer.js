import React, {Component} from 'react'
import './OrganizationCardContainer.css'
// import Cat from './cat.jpeg'
import OrgCard from '../OrganizationCard/OrgCard'

 class OrganizationCardContainer extends Component{
     render(){
        return (
          <div className="CardContainerParent">
            <OrgCard/>
            <OrgCard/>
            <OrgCard/>
          </div>
        )
     }
}

export default OrganizationCardContainer;
