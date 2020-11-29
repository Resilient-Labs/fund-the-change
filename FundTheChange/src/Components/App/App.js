import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";

import Tracker from "../Tracker/Tracker";
import FavoriteOrgCard from "../FavoriteOrgCard/FavoriteOrgCard";
//import OrgCard from "../OrganizationCard/OrgCard";
import OrganizationCardContainer from "../OrganizationCard/OrganizationCardContainer";
import HighlightedOrg from "../HighlightedOrg/HighlightedOrg";
=======
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
  const [holding, setHolding] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result[0]._id, "WITH Fetch");
        setHolding(data.result[0]._id || "False");
      });
  }, []);

  console.log("This is the HOLDING TEST", holding);
  // return <div> </div>;
  /*
  The issue we currently are having:
    We can pull the users info
    We can save it to state
    The App renders before we can have it pull the correct information from state
  */

  // console.log(userId, "THIS IS USERID AFTER FETCH");
  if (holding !== "False") {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header loggedIn={holding} />
              <Home />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/signup">
              <Header />
              <Signup />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/login">
              <Header />
              <Login />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/about">
              <Header />
              <About />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/profile">
              <Header />
              <Tracker />
              <FavoriteOrgCard />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/stripe">
              <Header />
              <Stripe />
              <Footer />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/generalOrgs">
              <Header />
              <HighlightedOrg />
              <OrganizationCardContainer />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  //: {
  //   return (
  //     <div className="App">
  //       <Router>
  //         <Switch>
  //           <Route exact path="/">
  //             <Header loggedIn={this.userId.length > 0} />
  //             <Home />
  //             <Footer />
  //           </Route>
  //         </Switch>
  //
  //         <Switch>
  //           <Route exact path="/signup">
  //             <Header />
  //             <Signup />
  //             <Footer />
  //           </Route>
  //         </Switch>
  //
  //         <Switch>
  //           <Route exact path="/login">
  //             <Header />
  //             <Login />
  //             <Footer />
  //           </Route>
  //         </Switch>
  //
  //         <Switch>
  //           <Route exact path="/about">
  //             <Header />
  //             <About />
  //             <Footer />
  //           </Route>
  //         </Switch>
  //       </Router>
  //     </div>
  //   );
  // }
=======
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
    <FavoriteOrgCard/>
    <FavoriteOrgCard/>
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
