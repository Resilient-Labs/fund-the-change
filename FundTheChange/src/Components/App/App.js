import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams
} from "react-router-dom"

import './App.css';
import OrgCard from '../OrganizationCard/OrgCard';
import Login from '../Authentication/Login/Login';
import Signup from '../Authentication/Signup/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import HighlightedOrg from '../HighlightedOrg/HighlightedOrg'

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
    <Route exact path="/OrgCard">
    <Header/>
    <OrgCard/>
    <Footer/>
    </Route>
    </Switch>

    <Switch>
    <Route exact path="/HighlightedOrg">
    <Header/>
    <HighlightedOrg/>
    <Footer/>
    </Route>
    </Switch>
   </Router>





    </div>

  );
}

export default App;
