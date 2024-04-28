import React, { useState } from "react";
import { Watch } from "react-loader-spinner";
import axios from "axios";
import SearchForm from "./SearchForm";
import Main from "./Main";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = <SearchForm handleSubmit={handleSubmit} changeCity={changeCity} />;

  if (loaded) {
    return (
      <>
        {form}
        <Main
          temp={Math.round(weather.temperature)}
          city={city}
          wind={weather.wind}
          humidity={weather.humidity}
          description={weather.description}
          icon={weather.icon}
        />
      </>
    );
  } else {
    return (
      <>
        {form}
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#414D5F"
          ariaLabel="watch-loading"
          wrapperStyle={{
            "justify-content": "center",
            "margin-top": " 150px",
          }}
          wrapperClass="watch"
        />
      </>
    );
  }
}
