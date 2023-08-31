import React from "react";
import "./SecondCard.css";

export default function CardDetailComponent({ data }) {
    const weatherIcon = data.weather[0].icon;

    return (
        <div className="card-grid">
            <div className="card">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Humidity</h5>
                <span className="text-2xl text-white feels-like">{Math.floor(data.main.humidity)}%</span>
            </div>

            <div className="card">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Wind Speed</h5>
                <span className="text-2xl text-white feels-like">{Math.floor(data.wind.speed)}km/h</span>
            </div>

            <div className="card">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Temperature Range</h5>
                <span className="text-2xl text-white feels-like">
                    {Math.floor(data.main.temp_min)}°C - {Math.floor(data.main.temp_max)}°C
                </span>
            </div>

            <div className="card">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Feels Like</h5>
                <span className="text-2xl text-white feels-like">{Math.floor(data.main.feels_like)}°C</span>
                <p className="font-normal text-gray-700 dark:text-gray-400">{data.weather[0].description}</p>
            </div>
        </div>
    );
}
