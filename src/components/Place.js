import React from "react";

function Place({ venue }) {
  const { icon, name } = venue.categories[0];
  return (
    <div className="venue">
      <h2>{venue.name}</h2>
      <img
        className="venueimage"
        src={`${icon.prefix}bg_64${icon.suffix}`}
        alt={name}
      />
      <h3>Address:</h3>
      <p>{venue.location.address}</p>
      <p>{venue.location.city}</p>
      <p>{venue.location.country}</p>
    </div>
  );
}

export default Place;
