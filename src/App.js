import React, { useEffect, useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import './App.css';
import Search from './search/search';
import First from './first/first';
// const data = require('countrycitystatejson');

// const countries = data.getCountries();
// console.log(countries)
// const states = data.getStatesByShort('US');
// console.log(states)
// const cities = data.getCities('UA');


// const S = countries.map(element => {
//   let city = document.createElement('option')
//   city.innerHTML = element.name;
//   return city;
// });
// console.log(S)
// console.log(S[1])

// function App() {
//   return (
//     <>
//     <select>
//       {S.map(element => {
//         return <option>{element.innerHTML}</option>
//       })}
//     </select>
//       {/* <First></First> */}
//     </>
//   );
// }

// export default App;
// console.log(Country.getAllCountries())
// console.log(City.getAllCities())
// const S = Country.map(element => {
//   let city = document.createElement('option')
//   city.innerHTML = element.name;
//   return city;
// });
// function App() {
//   return (
//     <>
//     </>
//   );
// }
// export default App;
// const allCountries = Country.getAllCountries();
// function setCities(){
//   const cities = allCountries.getCities('US');
//   console.log(cities)
// }
// function App() {
//   // Создаем список опций для выпадающего списка стран
//   const countryOptions = allCountries.map(country => {
//     return <option key={country.code} value={country.name}>{country.name}</option>;
//   });

//   return (
//     <>
//       <select>
//         {countryOptions}
//       </select>
//     </>
//   );
// }

// export default App;

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  // Обработчик изменения выбранной страны
  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    // Получаем города для выбранной страны
    const countryCities = City.getAllCities().filter(city => city.country === countryName);
    setCities(countryCities);
  };

  // Получаем список всех стран
  const allCountries = Country.getAllCountries();

  // Создаем список опций для выпадающего списка стран
  const countryOptions = allCountries.map(country => {
    return <option key={country.code} value={country.name}>{country.name}</option>;
  });

  // Создаем список опций для выпадающего списка городов
  const cityOptions = cities.map(city => {
    return <option key={city.name} value={city.name}>{city.name}</option>;
  });

  return (
    <div>
      <div>
        <select onChange={handleCountryChange}>
          <option value="">Выберите страну</option>
          {countryOptions}
        </select>
      </div>
      <div>
        <select>
          <option value="">Выберите город</option>
          {cityOptions}
        </select>
      </div>
    </div>
  );
}

export default App;
