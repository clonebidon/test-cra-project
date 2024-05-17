// import React, { useEffect, useState } from 'react';
// import { Country, City }  from 'country-state-city';
// import './App.css';

// function App() {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [cities, setCities] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!selectedCountry) return;

//     const countryIndex = Country.getAllCountries().find(country => country.name === selectedCountry);
//     if (!countryIndex) {
//       setError(`Country ${selectedCountry} not found.`);
//       return;
//     }

//     setError(null);
//     city_exp(countryIndex.isoCode); 
//   }, [selectedCountry]);

//   async function city_exp(countryCode) { 
//     try {
//       const citiesInCountry = City.getAllCities().filter(city => city.countryCode === countryCode);
//       setCities(citiesInCountry);
//     } catch (error) {
//       setError(`Failed to load cities: ${error.message}`);
//     }
//   }

//   const allCountries = Country.getAllCountries();

//   const countryOptions = allCountries.map(country => (
//     <option key={country.code} value={country.name}>{country.name}</option>
//   ));

//   const cityOptions = cities.map(city => (
//     <option key={city.code} value={city.name}>{city.name}</option>
//   ));

//   function openCityForm() {
//     document.body.classList.add('body_lock');
//     document.querySelector('.notification_container').classList.remove('none');
//   }

//   function closeCityForm() {
//     document.body.classList.remove('body_lock');
//     document.querySelector('.notification_container').classList.add('none');
//   }

//   return (
//     <>
//       <button className="choose_city" onClick={openCityForm}>
//           Choose city
//       </button>

//       <section className="notification_container none">
//           <div className="notification">
//               <h1>Select the location you need</h1>
//               <h2>Select the location</h2>
//               <h3>Location</h3>
//               <img className="closeCityForm" src="img/close.svg" alt="X" onClick={closeCityForm}/>
//               <div className="divider"></div>
//               <input type="text" name="" id="country" placeholder="Country" className="country" list='countries' onChange={(e) => setSelectedCountry(e.target.value)}/>
//               <datalist id='countries'>
//                 {countryOptions}
//               </datalist>
//               <input list='cities' type="text" name="" id="city" placeholder="City" className="city"/>
//               <datalist id='cities'>
//                 {cityOptions}
//                </datalist>
//               <div className="buttonbox">
//                   <button className="cancel">Cancel</button>
//                   <button className="confirm">Confirm</button>
//               </div>
//           </div>
//       </section>
//     </>
//   );
// }
// export default App
import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import WeatherBlock from "./components/weatherHere/WeatherBlock.jsx";
import ParentComponent from "./components/testing/weatherTest.jsx";

const API_KEY = "a77161cc9a8c76f10e0fd3fe846df0a2";

class App extends React.Component {
  state = {
    weatherData: null,
    error: null,
    latitude: null,
    longitude: null,
    geolocationError: null
  };

  gettingWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=${API_KEY}`
      );
      const data = await response.json();
      this.setState({ weatherData: data, error: null });
    } catch (error) {
      this.setState({ weatherData: null, error: "Failed to fetch weather data" });
      console.error("Error fetching weather data:", error);
    }
  };

  geoFindMe = () => {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href = "";
    mapLink.textContent = "";

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setState({ latitude, longitude, geolocationError: null });
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    };

    const error = () => {
      this.setState({
        latitude: null,
        longitude: null,
        geolocationError: "Невозможно получить ваше местоположение"
      });
    };

    if (!navigator.geolocation) {
      this.setState({
        geolocationError: "Geolocation не поддерживается вашим браузером"
      });
    } else {
      status.textContent = "Определение местоположения…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  componentDidMount() {
    this.geoFindMe();
  }

  render() {
    const { weatherData, error, latitude, longitude, geolocationError } = this.state;

    return (
      <div>
        <Info />
        <Form />
        <div>
  <WeatherBlock button={<button onClick={this.gettingWeather}>Get Weather</button>} weatherData={weatherData} />
</div>
        {error && <p>{error}</p>}
        {geolocationError && <p>{geolocationError}</p>}
        {latitude && longitude && (
          <p>
            <a id="map-link"></a>
          </p>
        )}
          <ParentComponent />
        {weatherData && (
          <p>Weather: {JSON.stringify(weatherData)}</p>
        )}
      </div>
    );
  }
}

export default App;