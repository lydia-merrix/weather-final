import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Saturday 08:00",
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      skies: response.data.weather[0].description,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form className="search-form">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="Search"
                      placeholder="Type a City"
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="search"
                      className="form-control btn btn-primary shadow-sm"
                    />
                  </div>
                  <div className="col-3">
                    <button>My Location</button>
                  </div>
                </div>
              </form>
              <h1 className="city">{weatherData.city}</h1>
              <ul>
                <li className="date">{weatherData.date}</li>
                <li className="sky">{weatherData.description}</li>
              </ul>
              <h2>
                Current Temperature {Math.round(weatherData.temperature)}°c
              </h2>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix temperature">
                    <img
                      alt={weatherData.description}
                      src={weatherData.iconUrl}
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
                      Sunrise: <span>{weatherData.sunrise}</span>
                    </li>
                    <br />
                    <li>
                      Sunset: <span>{weatherData.sunset}</span>
                    </li>
                    <br />
                    <li>
                      Wind: <span>{weatherData.wind}</span> mph
                    </li>
                    <br />
                    <li>
                      Skies: <span>{weatherData.skies}</span>
                    </li>
                    <br />
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
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
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fd9d9da952d98d244f4e2349d84a75af";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
