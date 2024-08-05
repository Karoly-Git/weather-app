// src/components/ForecastBox.js

import React, { useRef } from "react";
import HourForecastDetail from "./HourForecastDetail";

const HourForecastBox = ({ hourForecastData }) => {
    const forecastBoxRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isDown = true;
        forecastBoxRef.current.classList.add("active");
        startX = e.pageX - forecastBoxRef.current.offsetLeft;
        scrollLeft = forecastBoxRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        forecastBoxRef.current.classList.remove("active");
    };

    const handleMouseUp = () => {
        isDown = false;
        forecastBoxRef.current.classList.remove("active");
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - forecastBoxRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        forecastBoxRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            id="hour-forecast-box"
            ref={forecastBoxRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {hourForecastData.map((data, index) => (
                <HourForecastDetail
                    key={index}
                    time={data.time}
                    iconSrc={data.iconSrc}
                    temperature={data.temperature}
                    humidity={data.humidity}
                />
            ))}
        </div>
    );
};

export default HourForecastBox;
