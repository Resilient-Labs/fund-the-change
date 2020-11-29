import React, { useEffect, useState } from "react";
import './Tracker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import TrackerCard from "./TrackerCard.js";


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
