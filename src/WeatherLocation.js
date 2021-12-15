import React from "react";
import axios from "axios";

export default function WeatherLocation() {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "fd9d9da952d98d244f4e2349d84a75af";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getPosition);
}

//function getForecast(coordinates) {
//console.log(coordinates);
//let apiKey = "fd9d9da952d98d244f4e2349d84a75af";
//let units = "imperial";
//let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;

//axios.get(apiUrl).then(displayForecast);
//}
//function buttonClick(event) {
// event.preventDefault();
// navigator.geolocation.getCurrentPosition(getPosition);
// }
