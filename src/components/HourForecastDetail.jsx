// src/components/HourForecastDetail.js

import React from "react";
import HUMIDITY_ICON from "../img/humidity.png";

const HourForecastDetail = ({ time, iconSrc, temperature, humidity }) => {
    return (
        <div className="forecast-detail">
            <div>{time}</div>
            <img src={iconSrc} alt="weather icon" />
            <div>{temperature}°C</div>
            <div className="forecast-diagram">
                <div className="temperature-column" style={{ height: `${2.5 * temperature}%` }}></div>
            </div>
            <div>
                <img className="icon" src={HUMIDITY_ICON} alt="" />
                {humidity}%
            </div>
        </div>
    );
};

export default HourForecastDetail;
