import React from 'react';

import { useState } from 'react';

import search_button_icon from "../imgs/search_icon.png";

export default function Search({setApiData}) {

  // State
  //const [apiData, setApiData] = useState({});
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

  //console.log(`api`, apiData);


  return (
    <div className='flex justify-center mb-8 w-full'>
      {/*
      `px-5 = padding-left,right: 1.25rem(20px)
      `rounded-sm` = border-radius: 0.125rem(2px)
      `text-3xl` = font-size: 1.875rem, line-height: 2.25rem
      */}
      <form className="flex" onSubmit={getDataApi}>
        <input
          className="text-3xl text-white py-5 px-5 border-none rounded bg-gradient-to-r from-sky-500 to-indigo-500"
          type="text"
          placeholder="Type city name"
          onChange={(e) => setPlace(e.target.value)}
          value={place} />
        <button className="float -ml-12" type='submit'>
          <img className="h-7" src={search_button_icon} alt="" />
        </button>
      </form>
    </div>
  );
}