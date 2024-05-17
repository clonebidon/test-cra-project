// Родительский компонент
import React, { useState, useEffect } from "react";
import ChildBlock from "./childblock";

const ParentComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = "8eb56b02f5e05fb8cc330c69fb1f0a86";
    const city = "Dnipro";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div>
      {weatherData && <ChildBlock weatherData={weatherData} />}
    </div>
  );
};

export default ParentComponent