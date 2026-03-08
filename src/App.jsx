import React from "react";
import Header from "./components/Nav/Header";
import Slider from "./components/Home/Slider";
import "./index.css";

function App() {
  return (
    <div className='bg-black h-screen'>
      <Header />\
      <Slider />
    </div>
  );
}

export default App;
