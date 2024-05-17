// Дочерний компонент WeatherBlock
import React from "react";

const ChildBlock = ({ weatherData }) => {
  const city = weatherData.name;
  const time = new Date(weatherData.dt * 1000).toLocaleTimeString();
  const tempDeg = Math.round(weatherData.main.temp - 273.15) + "°C";

  return (
    <>
      <section className="blockSecWeather">
        <div className="mainWeather">
          <div className="head">
            <div className="mainWeatherHere">
              <h2 className="header">Weather in {city}</h2>
              <h5 className="subTitle">How {time}.</h5>
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

export default ChildBlock;