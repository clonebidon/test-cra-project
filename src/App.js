import React, { useEffect, useState } from 'react';
import { Country, City }  from 'country-state-city';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCountry) return;

    const countryIndex = Country.getAllCountries().find(country => country.name === selectedCountry);
    if (!countryIndex) {
      setError(`Country ${selectedCountry} not found.`);
      return;
    }

    setError(null);
    city_exp(countryIndex.isoCode); 
  }, [selectedCountry]);

  async function city_exp(countryCode) { 
    try {
      const citiesInCountry = City.getAllCities().filter(city => city.countryCode === countryCode);
      setCities(citiesInCountry);
    } catch (error) {
      setError(`Failed to load cities: ${error.message}`);
    }
  }

  const allCountries = Country.getAllCountries();

  const countryOptions = allCountries.map(country => (
    <option key={country.code} value={country.name}>{country.name}</option>
  ));

  const cityOptions = cities.map(city => (
    <option key={city.code} value={city.name}>{city.name}</option>
  ));

  function openCityForm() {
    document.body.classList.add('body_lock');
    document.querySelector('.notification_container').classList.remove('none');
  }

  function closeCityForm() {
    document.body.classList.remove('body_lock');
    document.querySelector('.notification_container').classList.add('none');
  }

  return (
    <>
      <button className="choose_city" onClick={openCityForm}>
          Choose city
      </button>

      <section className="notification_container none">
          <div className="notification">
              <h1>Select the location you need</h1>
              <h2>Select the location</h2>
              <h3>Location</h3>
              <img className="closeCityForm" src="img/close.svg" alt="X" onClick={closeCityForm}/>
              <div className="divider"></div>
              <input type="text" name="" id="country" placeholder="Country" className="country" list='countries' onChange={(e) => setSelectedCountry(e.target.value)}/>
              <datalist id='countries'>
                {countryOptions}
              </datalist>
              <input list='cities' type="text" name="" id="city" placeholder="City" className="city"/>
              <datalist id='cities'>
              {cityOptions}
               </datalist>
              <div className="buttonbox">
                  <button className="cancel">Cancel</button>
                  <button className="confirm">Confirm</button>
              </div>
          </div>
      </section>
    </>
  );
}
export default App