import React from "react";
import "./MainCard.css";
import clear_icon from "../imgs/clear.png";
import cloud_icon from "../imgs/cloud.png";
import drizzle_icon from "../imgs/drizzle.png";
import rain_icon from "../imgs/rain.png";
import snow_icon from "../imgs/snow.png";

export default function MainCard({ data }) {
    const weatherIconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;

    let weatherImage;

    if (weatherIconCode === "01d" || weatherIconCode === "01n") {
        weatherImage = clear_icon;
    } else if (weatherIconCode === "02d" || weatherIconCode === "02n") {
        weatherImage = cloud_icon;
    } else if (weatherIconCode === "03d" || weatherIconCode === "03n") {
        weatherImage = drizzle_icon;
    } else if (weatherIconCode === "04d" || weatherIconCode === "04n") {
        weatherImage = drizzle_icon;
    } else if (weatherIconCode === "09d" || weatherIconCode === "09n" || weatherIconCode === "10d" || weatherIconCode === "10n") {
        weatherImage = rain_icon;
    } else if (weatherIconCode === "13d" || weatherIconCode === "13n") {
        weatherImage = snow_icon;
    } else {
        weatherImage = clear_icon;
    }

    return (
        <div className="card-container">
            <h3>Current Weather</h3>
            <div>
                <img src={weatherImage} alt="Weather Icon" />
            </div>
            <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Temperature</h5>
            <div>
                <span className="text-2xl text-white feels-like">{Math.floor(data.main.temp)}°C</span>
            </div>
            <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Location</h5>
            <div>
                <span className="text-2xl text-white feels-like">{data.name}</span>
            </div>
        </div>
    );
}




