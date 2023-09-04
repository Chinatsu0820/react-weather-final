import React, { useState } from 'react';
import Search from './Search';
//import TestName from './TestName'; // just for test
//import TestTemp from './TestTemp'; // just for test
import MainCard from './MainCard';
import CardDetailComponent from './CardDetailComponent';
import "./WeatherApp.css";


export default function App() {
  const [apiData, setApiData] = useState({});

  console.log("test in render");
  console.log(apiData, setApiData);

  return (
    <div className='main-container'>
      <Search setApiData={setApiData} />

      <div className="card-container">

      <MainCard apiData={apiData} className="main-card" />

      <CardDetailComponent apiData={apiData} className="second-card" />

      </div>
    </div>
  );
}