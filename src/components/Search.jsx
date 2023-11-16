import React from 'react';

import { useState } from 'react';

import search_button_icon from "../imgs/search_icon.png";

export default function Search() {

  // State
  const [apiData, setApiData] = useState({});
  const [place, setPlace] = useState('');

  // API KEY AND URL
  const apiKey = 'ec112e164c3b7dd3ec382aca02d7083a';

  // Side effect
  const getDataApi = (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  console.log(`api`, apiData);


  return (
    <div>
      
      <form className="relative max-w-xs" onSubmit={getDataApi}>
        <input
          className="absolute text-white h-12 py-0 px-2.5 left-0 -top-0 border-none rounded-sm bg-sky-800"
          type="text"
          placeholder="Type city name"
          onChange={(e) => setPlace(e.target.value)}
          value={place} />
          <div className="text-center">
        <button className="absolute h-8 border-none text-xl mt-2.5" type='submit'>
          <img src={search_button_icon} alt="" />
        </button>
        </div>
      </form>
    </div>
  );
}