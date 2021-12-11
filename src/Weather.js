import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp.wind,
      city: response.date.name,
    });
    setReady(true);
  }
  if (ready) {
    return (
      //set WeatherData = {
      //city: "New York",
      //temperature: 19,
      //   date: "Tuesday 12:00",
      //   description: "partly cloudy",
      //   imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      //   sunrise: 6,
      //   sunset: 5,
      //  wind: 0,
      //  skies: 2,
      //   humidity: 50,

      // });

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
                <li>{weatherData.date}</li>
                <li className="sky"></li>
              </ul>
              <h2>Current Temperature {weatherData.temperature}°c</h2>
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
    let city = "New York";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
