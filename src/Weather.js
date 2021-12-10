import React from "react";
import "./Weather.css";


export default function Weather() {
  let WeatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 12:00",
    description: "partly cloudy",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    sunrise: 6,
    sunset: 5,
    wind: 0,
    skies: 2,
    humidity: 50,
  };

  return (
    <div className="container">
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
          <h1 className="city">{WeatherData.city}</h1>
          <ul>
            <li>{WeatherData.date}</li>
            <li className="sky"></li>
          </ul>
          <h2>Current Temperature {WeatherData.temperature}°c</h2>
          <div className="row">
            <div className="col-6">
              <div className="clearfix temperature">
                <img
                  alt=""
                  src="https://emojis.wiki/emoji-pics/facebook/sun-behind-small-cloud-facebook.png"
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
                  Sunrise: <span>{WeatherData.sunrise}</span>
                </li>
                <br />
                <li>
                  Sunset: <span>{WeatherData.sunset}</span>
                </li>
                <br />
                <li>
                  Wind: <span>{WeatherData.wind}</span> mph
                </li>
                <br />
                <li>
                  Skies: <span>{WeatherData.skies}</span>
                </li>
                <br />
                <li>
                  Humidity: <span>{WeatherData.humidity}</span>%
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
  );
}

