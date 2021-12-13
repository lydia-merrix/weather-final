import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      skies: response.data.weather[0].description,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }

  function search() {
    const apiKey = "fd9d9da952d98d244f4e2349d84a75af";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="Search"
                      placeholder="Type a City"
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control shadow-sm"
                      onChange={handleCityChange}
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
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
