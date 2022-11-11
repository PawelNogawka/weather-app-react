import React from "react";

function Result(props) {
  const { city, sunrise, sunset, wind, temp, date, err } = props.state;

  let content = null;

  if (!err && city) {
    const dateSunrise = new Date(sunrise * 1000).toTimeString();
    const dateSunset = new Date(sunset * 1000).toTimeString();
    content = (
      <div className="result-info">
        <h3 className="result-value">Searching city: {city}</h3>
        <h3 className="result-value">Data for the hour: {date}</h3>
        <h3 className="result-value">Current temperature: {temp} °C</h3>
        <h3 className="result-value">Wind speed: {wind} m/s</h3>
        <h3 className="result-value">Sunrise: {dateSunrise}</h3>
        <h3 className="result-value">Sunset: {dateSunset}</h3>
      </div>
    );
  }

  return (
    <div className="result">
      {err
        ? <p className="error">{`We do not have a city in the database with the name: ${city}`}</p>
        : content}
    </div>
  );
}

export default Result;

