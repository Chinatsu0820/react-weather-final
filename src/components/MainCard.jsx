import React from "react";
import "./MainCard.css";
export default function MainCard({ data }) {
    const weatherIcon = data.weather[0].icon; 
    console.log (data)

    return (
        <div>
            

            <div className="card-container">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Location</h5>
                <div>
                    <span className="text-2xl text-white feels-like">{(data.name)}</span>
                </div>
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Tempreture</h5>
                <div>
                    {/* <img src={weatherIcon} alt="Weather Icon" width="100" height="100" /> */}
                    <span className="text-2xl text-white feels-like">{Math.floor(data.main.temp)}°C</span>
                </div>
                
            </div>

        </div>

        
    );

    
}
