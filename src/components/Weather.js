import React, { useState, useEffect } from "react";

const { REACT_APP_OPENWEATHER_APP_ID: appId } = process.env;
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const day = new Date().toLocaleString("en-US", {
  weekday: "long",
});

function Weather({ city }) {
  const path = `${weatherUrl}?q=${city}&appid=${appId}&units=metric`;

  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState([]);
  const [error, setError] = useState(null);

  async function weatherHandler() {
    try {
      const { main, weather, message } = await fetch(path).then((res) =>
        res.json()
      );
      if (!main || !weather) {
        throw new Error(message);
      }
      const { description, icon } = weather[0];
      setWeather({ description, icon });
      setTemperature(main.temp);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    if (city && city !== "") {
      weatherHandler();
    }
  }, [city]);

  return weather && temperature && !error ? (
    <>
      <div className="sectiontitle">
        <h2>CURRENT WEATHER</h2>
      </div>
      <section id="weather">
        <div className="weather" id="weather1">
          <h2>{day}</h2>
          <h2>Temperature: {temperature}°C</h2>
          <h2>Condition: {weather.description}</h2>
          <img
            className="weathericon"
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
        </div>
      </section>
    </>
  ) : (
    <p className="weather">{error}</p>
  );
}

export default Weather;
