import React from "react";
import "./SecondCard.css";
import humidity from "../imgs/humidity.png"
import wind from "../imgs/wind.png"
import temperatureRange from "../imgs/temperature-range.png"
import feelsLike from "../imgs/feels-like.png"



export default function CardDetailComponent({ apiData }) {
    // apiData.weatherが存在しない場合や要素が存在しない場合のデフォルト値を設定
    // These are default if there is not apiData.weather and element
    const weather = apiData.weather && apiData.weather[0];

    // apiDataまたはapiData.mainまたはapiData.windが存在しない場合、ローディング表示などの適切なコンテンツを返す
    // We will get null if there is not apiData and apiData.main
    if (!apiData || !apiData.main || !apiData.wind) {
        return null; 
    }

    return (
        <div className="card-detail-container">
            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Humidity</h5>
                <div className="flex items-center justify-center">
                    <img src={humidity} alt="humidity image" title="humidity image" />
                    <span className="text-4xl font-bold text-white feels-like">{Math.floor(apiData.main.humidity)}%</span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Wind Speed</h5>
                <div className="flex items-center justify-center">
                    <img src={wind} alt="wind image" title="wind image" />
                    <span className="text-4xl font-bold text-white feels-like">{Math.floor(apiData.wind.speed)}km/h</span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Temperature Range</h5>
                <div className="flex items-center justify-center">
                    <img src={temperatureRange} alt="temperature range image" title="temperature range image" />
                    <span className="text-4xl font-bold text-white feels-like">
                        {Math.floor((apiData.main.temp_min)-273.15)}°C - {Math.floor((apiData.main.temp_max)-273.15)}°C
                    </span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Feels Like</h5>
                <div className="flex items-center justify-center">
                    <img src={feelsLike} alt="humidity image" title="humidity image" />
                    <span className="text-4xl font-bold text-white feels-like">{Math.floor((apiData.main.feels_like)-273.15)}°C</span>
                </div>
                <p className="font-normal text-center justify-center text-white capitalize">{apiData.weather[0].description}</p>
            </div>
        </div>

    );
}
