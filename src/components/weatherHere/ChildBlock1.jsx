// Дочерний компонент WeatherBlock
import React from "react";
import styles from "style.css";

const ChildBlock1 = ({ weatherData }) => {
  const city = weatherData.name;
  const time = new Date(weatherData.dt * 1000).toLocaleTimeString();
  const date = new Date(Date.now())
  console.log(date)
  const tempDeg = Math.round(weatherData.main.temp - 273.15) + "°C";
  let cloudy = "https://cdn-icons-png.freepik.com/512/7084/7084486.png";
  let weatherstate = "Cloudy";
  let day = "Monday";
  let date2 = "123s"

  return (
    <>
      <section className="blockSecWeather">
        <div className="mainWeather">
          <div className="mainWeatherBlock left">
            <img className="cloudyImg" src={cloudy} alt="" />
            <span className="smallText">{weatherstate}</span>

          </div>
          <div className="palka"></div>
          <div className="mainWeatherBlock mid">
            <h1 className="degs bigText">{tempDeg}</h1>
            <h2 className="smallText">
                <span className="date">
                    {day}, {date2}
                </span>
            </h2>
                <h2 className="smallText">{city}</h2>
                <h2 className="">{time}</h2>
          </div>
          <div className="palka"></div>
          <div className="mainWeatherBlock right">123</div>
          {/* <div className="head">
            <div className="mainWeatherHere">
              <h2 className="header">Weather in {city}</h2>
              <h5 className="subTitle">For {time}.</h5>
            </div>
          </div>
          <div className="stat">
            <div className="statTop">
                <h1 className="degs">{tempDeg}</h1>
            </div>
            <div className="statDown"></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ChildBlock1;