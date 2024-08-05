// src/App.js

import React from "react";
import HourForecastBox from "./components/HourForecastBox";
import DetailBox from "./components/DetailBox";
import SunPositionCanvas from "./components/SunPositionCanvas";
import "./App.css";

import UV_INDEX_ICON from "./img/uv_index.png";
import HUMIDITY_PERCENT_ICON from "./img/humidity_percentage.png";
import HUMIDITY_ICON from "./img/humidity.png";
import WIND_ICON from "./img/wind.png";
import DEW_POINT_ICON from "./img/dew_point.png";
import PRESSURE_ICON from "./img/pressure.png";
import VISIBILITY_ICON from "./img/visibility.png";

import NEW_MOON from './img/moon/new_moon.png';

function App() {
  const hourForecastData = [
    {
      time: "8:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
      temperature: 12,
      humidity: 1,
    },
    {
      time: "9:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/night/248.png",
      temperature: 15,
      humidity: 1,
    },
    {
      time: "10:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/176.png",
      temperature: 17,
      humidity: 1,
    },
    {
      time: "11:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 10,
      humidity: 1,
    },
    {
      time: "12:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperature: 11,
      humidity: 1,
    },
    {
      time: "13:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
      temperature: 13,
      humidity: 1,
    },
    {
      time: "14:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 20,
      humidity: 1,
    },
    {
      time: "15:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperature: 23,
      humidity: 1,
    },
    {
      time: "16:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
      temperature: 28,
      humidity: 1,
    },
    {
      time: "17:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 27,
      humidity: 1,
    },
    {
      time: "18:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperature: 26,
      humidity: 1,
    },
    {
      time: "19:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
      temperature: 25,
      humidity: 1,
    },
    {
      time: "20:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 22,
      humidity: 1,
    },
    {
      time: "21:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/176.png",
      temperature: 20,
      humidity: 1,
    },
    {
      time: "22:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
      temperature: 12,
      humidity: 1,
    },
    {
      time: "23:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/night/248.png",
      temperature: 15,
      humidity: 1,
    },
    {
      time: "00:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/176.png",
      temperature: 17,
      humidity: 1,
    },
    {
      time: "01:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 10,
      humidity: 1,
    },
    {
      time: "02:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperature: 11,
      humidity: 1,
    },
    {
      time: "03:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
      temperature: 13,
      humidity: 1,
    },
    {
      time: "04:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 20,
      humidity: 1,
    },
    {
      time: "05:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperature: 23,
      humidity: 1,
    },
    {
      time: "06:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/119.png",
      temperature: 28,
      humidity: 1,
    },
    {
      time: "07:00",
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperature: 27,
      humidity: 1,
    }
  ];

  const dayForecastData = [
    {
      when: 'Yesterday',
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
      temperatureMin: 15,
      temperatureMax: 23,
      humidity: 1,
    },
    {
      when: 'Today',
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/266.png",
      temperatureMin: 18,
      temperatureMax: 27,
      humidity: 7,
    },
    {
      when: 'Tomorrow',
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/176.png",
      temperatureMin: 14,
      temperatureMax: 25,
      humidity: 12,
    },
    {
      when: 'Wednesday',
      iconSrc: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
      temperatureMin: 13,
      temperatureMax: 26,
      humidity: 17,
    }
  ];

  return (
    <div className="App">
      <section id="main-section">
        <h1>{'21°'}</h1>
        <h3>Fair</h3>
        <p>{'24°'} / {'14°'} Feels like {'21°'}</p>
      </section>

      <section id="temperature-section">
        <h4>Cloudy. Highs 22 to 24°C, lows 13 to 15°C.</h4>
        <HourForecastBox hourForecastData={hourForecastData} />
      </section>

      <section id="day-forecast-section">
        {dayForecastData.map(day => (
          <div key={day.when} className="day-forecast-details">
            <h2>{day.when}</h2>
            <span>
              <img className="icon" src={HUMIDITY_ICON}></img>
              <span>
                {day.humidity}%
              </span>
            </span>
            <img className="icon" src={day.iconSrc}></img>
            <span>{'15'}° {'17'}°</span>
          </div>
        ))}
      </section>

      <section id="air-quality-section">
        <span>Air Quality Index</span>
        <h2>Low Pollution (2)</h2>
        <div id="pollution-bar">
          <div></div>
        </div>
      </section>

      <section id="detail-section">
        <div className="detail-container">
          <DetailBox iconSrc={UV_INDEX_ICON} label="UV index" value="Moderate" />
          <DetailBox iconSrc={HUMIDITY_PERCENT_ICON} label="Humidity" value="65%" />
        </div>
        <div className="detail-container">
          <DetailBox iconSrc={WIND_ICON} label="Wind" value="5 km/h" />
          <DetailBox iconSrc={DEW_POINT_ICON} label="Dew point" value="10°" />
        </div>
        <div className="detail-container">
          <DetailBox iconSrc={PRESSURE_ICON} label="Pressure" value="1015.9 mb" />
          <DetailBox iconSrc={VISIBILITY_ICON} label="Visibility" value="Unlimited" />
        </div>
      </section>

      <section id="sun-position-section">
        <div id="my-canvas">
          <SunPositionCanvas />
        </div>
        <div className="up-down-container">
          <div className="up-down-info">
            <span className="phase">Sunrise</span>
            <span className="phase-time">5:29</span>
          </div>
          <div className="up-down-info">
            <span className="phase">Sunset</span>
            <span className="phase-time">20:43</span>
          </div>
        </div>
      </section>

      <section id="moon-position-section">
        <div className="up-down-container">
          <div className="up-down-info">
            <span className="phase">Moonrise</span>
            <span className="phase-time">4:55</span>
          </div>
          <div className="up-down-info">
            <img className="icon" src={NEW_MOON} alt="moon"></img>
            <span className="phase">New Moon</span>
          </div>
          <div className="up-down-info">
            <span className="phase">Moonset</span>
            <span className="phase-time">21:12</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
