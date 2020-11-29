import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useParams
} from "react-router-dom"
import AuthFlow from '../Authentication/AuthFlow/AuthFlow';
import MoodJournal from '../MoodJournal/MoodJournal';
import Breather from '../Breather/Breather'

import MoodJournalHistory from '../MoodJournalHistory/MoodJournalHistory'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AuthFlow />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/moodJournal">
            <MoodJournal />
          </Route>
        </Switch>


        <Switch>
          <Route exact path="/moodJournalHistory">
            <MoodJournalHistory />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/Breather">
            <Breather />
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
