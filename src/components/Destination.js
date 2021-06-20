import React from "react";
import Weather from "./Weather";
import Venues from "./Venues";

function Destination({ city }) {
  return (
    city && (
      <div className="container">
        <div id="destination">{city}</div>
        <Weather city={city} />
        <Venues city={city} />
      </div>
    )
  );
}

export default Destination;