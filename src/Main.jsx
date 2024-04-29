import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Main(props) {
  return (
    <main className="p-0">
      <h1 className="current-city text-capitalize" id="current-city">
        {props.info.city.toLowerCase()}
      </h1>
      <div className="current-weather d-flex justify-content-between align-items-end">
        <div>
          <div className="current-temperature-icon">
            <img src={props.info.icon} alt={props.info.description} />
          </div>
          <h5 className="text-capitalize"> {props.info.description}</h5>{" "}
          <p className="current-details">
            Humidity: <strong>{props.info.humidity}%</strong>, Wind:{" "}
            <strong>{props.info.wind}km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <div>
            <WeatherTemperature tempCelsius={props.info.temperature} />
            <FormattedDate date={props.info.date} />
          </div>
        </div>
      </div>
    </main>
  );
}
