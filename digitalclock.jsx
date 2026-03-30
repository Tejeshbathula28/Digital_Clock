import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  let [dt, setDt] = useState(new Date());
  let upddt = () => {
    setDt(new Date());
  };
  useEffect(() => {
    let iid = setInterval(upddt, 1000);
    return () => {
      clearInterval(iid);
    };
  });
  return (
    <div className="container">
      <h1>Digital Clock</h1>
      <p className="time">{dt.toLocaleTimeString()}</p>
    </div>
  );
};

export default App;
