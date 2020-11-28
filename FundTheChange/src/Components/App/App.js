import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams
} from "react-router-dom"

import './App.css';
import Login from '../Authentication/Login/Login';
import Signup from '../Authentication/Signup/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';

import Tracker from '../Tracker/Tracker';
import TrackerCard from '../Tracker/TrackerCard.js';
import FavoriteOrgCard from '../FavoriteOrgCard/FavoriteOrgCard';
import OrgCard from '../OrganizationCard/OrgCard';
import OrganizationCardContainer from '../OrganizationCard/OrganizationCardContainer';
import HighlightedOrg from '../HighlightedOrg/HighlightedOrg'
import StripeContainer from "../Stripe/StripeContainer";


function App() {
  return (

    <div className="App">

    <Router>
    <Switch>
    <Route exact path="/">
    <Header/>
    <Home/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/signup">
    <Header/>
    <Signup/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/login">
    <Header/>
    <Login/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/about">
    <Header/>
    <About/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/profile">
    <Header/>
    <TrackerCard/>
    <Tracker/>
    <FavoriteOrgCard/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
      <Route exact path="/stripe/:id">
      <Header/>

        <StripeContainer  />
        <Footer/>

      </Route>
    </Switch>

    <Switch>
    <Route exact path="/generalOrgs">
    <Header/>
    <HighlightedOrg/>
    <OrganizationCardContainer />
    <Footer/>
    </Route>
    </Switch>
   </Router>





    </div>

  );
}

export default App;
