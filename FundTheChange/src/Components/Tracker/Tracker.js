import React from 'react'
import './Tracker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Tracker extends React.Component {
    render() {
        const now = 60;
      return <>
      <div className="tracker-container">
      <h3 className="tracker-title">Donation Tracker</h3>
      <div className= "progressBar">
      <ProgressBar striped variant="success" animated now={40} />
      <ProgressBar striped variant="info" animated now={20} />
      <ProgressBar striped variant="warning" animated now={60} />
      <h4 className="tracker-title">You have donated {`$${now}`} so far!</h4>
      </div>
      </div>
      </>
    }
  }

  export default Tracker
