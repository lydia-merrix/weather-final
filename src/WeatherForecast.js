import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Thu</div>
            <sm>
              {" "}
              <WeatherIcon code="01d" size={35} />
            </sm>
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fd9d9da952d98d244f4e2349d84a75af";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org
  /data/2.5/onecall?lat=${latitude}&lon=${longitude}
  &appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
