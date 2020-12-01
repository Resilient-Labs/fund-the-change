import React, { useEffect, useState } from "react";
import "./Tracker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Tracker = (props) => {
  const [donate, setDonate] = useState([]);

  useEffect((donate) => {
    fetch(`/api/donationAmount/${props.user}`)
      .then((res) => res.json())
      .then((data) => {
        setDonate(data.monies);
      });
  }, [props.user]); //<--Keep this array empty for only one update

  return (
    <div>
    <div className="tracker-container">
      <h3 className="tracker-title">Donation Tracker</h3>

      {/*THIS CAN BE USED POST MVP -- GRAPHING USER'S DONATION HISTORY
      <div className="progressBar">
      {donate.map((x, i) => {
        return <ProgressBar striped variant="success" animated now={x.amount} />
      })} */}
      <h4 className="tracker-title">
          You have donated ${donate} so far!
        </h4>
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Tracker;
