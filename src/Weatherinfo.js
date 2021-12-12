import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
        <li className="sky">{props.data.description}</li>
      </ul>
      <h2>Current Temperature {Math.round(props.data.temperature)}°c</h2>
      <div className="row">
        <div className="col-6">
          <div className="clearfix temperature">
            <img
              alt={props.data.description}
              src={props.data.iconUrl}
              className="weather float-left"
            />
            <div className="float-left">
              <strong className="today"></strong>
              <span className="units"></span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Sunrise: <span>{props.data.sunrise}</span>
            </li>
            <br />
            <li>
              Sunset: <span>{props.data.sunset}</span>
            </li>
            <br />
            <li>
              Wind: <span>{props.data.wind}</span> mph
            </li>
            <br />
            <li>
              Skies: <span>{props.data.skies}</span>
            </li>
            <br />
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-date"></div>
            <img src="" alt="" width="42" />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max"></span>
              <span className="weather-forecast-temperature-min"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
