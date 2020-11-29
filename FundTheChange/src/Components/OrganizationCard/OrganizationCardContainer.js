import React, { useEffect, useState } from "react";
import "./OrganizationCardContainer.css";
import OrgCard from "./OrgCard.js";
// import Cat from './cat.jpeg'
//import OrgCard from "../OrganizationCard/OrgCard";

const OrganizationCardContainer = () => {
  const [holding, setHolding] = useState([]);

  useEffect(() => {
    fetch("/organizations")
      .then((res) => res.json())
      .then((data) => { console.log (data.result)
        setHolding(data.result)});

  }, []); //<--Keep this array empty for only one update

  return (
    <div className="CardContainerParent">
      {holding.map((x, i) => {
        return <OrgCard key={i} props={x} />;
      })}
    </div>
  );
};

export default OrganizationCardContainer;
