import React from 'react'
import './Tracker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Tracker extends React.Component {
    render() {
        const now = 60;
      return <>
        <h3 className="tracker-title">Donation Tracker</h3>
        <div className="d-flex justify-content-center">
        <ProgressBar label={`${now}%`} animated now={60}/>
        </div>
        <h4 className="tracker-title">We have reached {`${now}%`} donations!</h4>
      </>
    }
  }

  export default Tracker
