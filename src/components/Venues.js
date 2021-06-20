import React, { useState, useEffect } from "react";
import Place from "./Place";

const {
  REACT_APP_FOURSQUARE_CLIENT_ID: clientId,
  REACT_APP_FOURSQUARE_CLIENT_SECRET: clientSecret,
} = process.env;
const url = `https://api.foursquare.com/v2/venues/explore`;
const date = new Date().toISOString().replaceAll("-", "").slice(0, 8);

function Venues({ city }) {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  async function venueHandler(city) {
    const venueUrl = `${url}?near=${city}&client_id=${clientId}&client_secret=${clientSecret}&v=${date}&limit=3&locale=en`;
    try {
      const { meta, response } = await fetch(venueUrl).then((res) =>
        res.json()
      );
      if (!response.groups) {
        throw new Error(meta.errorDetail);
      }
      const venues = response.groups[0].items.map((item) => item.venue);
      setPlaces(venues);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    if (city && city !== "") {
      venueHandler(city);
    }
  }, [city]);

  return places && !error ? (
    <>
      <div className="sectiontitle">
        <h2>TOP ATTRACTIONS</h2>
      </div>
      <section id="venues">
        {places.map((venue) => (
          <Place venue={venue} key={venue.id} />
        ))}
      </section>
    </>
  ) : (
    <p className="weather">{error}</p>
  );
}

export default Venues;
