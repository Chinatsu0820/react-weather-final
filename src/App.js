import React from "react";
import "./index.css";
// import Search from "./components/Search.jsx"
import WeatherApp from './components/WeatherApp.jsx';

function App() {
  return (
    <div className="App">    
      <h1>Weather.app</h1>
      {/* <Search /> */}
      <WeatherApp/>
    </div>
  );
}
export default App;