import React, { useState } from "react";
import "./style.css";
const Header = () => {
  const [temperature, setTemperature] = useState("Lorem");
  const array = ["Lorem", "ipsum", "dolor"];
  let sity = "Dnipro";
  let time = "14:23";
  let tempDeg = "14°C";
  // array[1]
  function handleClick() {}
  function handleButtonClick(children) {}

  return (
    <>
      <section className="blockSecWeather">
        <div className="mainWeather">
          <div className="head">
            <div className="mainWeatherHere">
              <h2 className="header">Weather in {sity}</h2>
              <h5 className="subTitle">How {time}.</h5>
            </div>
            <div className="findMe">
              <button className="findMeBut">Find my weather</button>
            </div>
          </div>
          <div className="stat">
            <div className="statTop">
                <h1 className="degs">{tempDeg}</h1>
            </div>
            <div className="statDown"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
