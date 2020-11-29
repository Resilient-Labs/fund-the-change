import React, { useEffect, useState } from "react";
import './Tracker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import TrackerCard from "./TrackerCard.js";

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


const Tracker = () => {
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    fetch("/donationAmount")
      .then((res) => res.json())
      .then((data) => { console.log ("hello",data)
        setDonate(data)});

  }, []); //<--Keep this array empty for only one update

  return (
    <div>
      {donate.map((x, i) => {
        return <TrackerCard key={i} props={x} />;
      })}
    </div>
  );
};

  export default Tracker
