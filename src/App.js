import React from "react";
import "./index.css";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div className="App">
      <h1>Weather.app</h1>
      <div className="pt-50"><Search /></div>
    </div>
  );
}
export default App;