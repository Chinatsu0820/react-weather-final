import React from 'react';

import WeatherApp from './WeatherApp.jsx';
import './Home.css';
import './WeatherApp.jsx'

export default function Example() {

  return (
    <div>

        <div className="bg-white">
    
          <div className="relative home-title isolate px-6 pt-14 lg:px-8">
            
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Forecast, Your Day: Weather, Simplified.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the beauty in every weather pattern, stay prepared, and make the most of your days with our intuitive weather app. Your personalized forecast, your unique adventure - let every day shine with weather wonders.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <WeatherApp />
    </div>
  )
}
