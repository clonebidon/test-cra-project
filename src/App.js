import React, { useEffect, useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import './App.css';
import Search from './search/search';
import First from './first/first';
console.log(City.getAllCities());
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
  const countrys = Country.getAllCountries();
  console.log(countrys[0].isoCode)
  const country_owl = (e) =>{
    console.log(e.target.value)
    let a = countrys.indexOf(e.target.value)
    console.log(a)
    console.log(e)
    setSelectedCountry(e.target.value)
    for (isoCode in a){
      console.log(a[isoCode])
    }
  }
  // Состояния для выбранной страны и списка городов


  // // Функция для обработки изменения выбранной страны
  // const handleCountryChange = (e) => {
  //   const countryName = e.target.value;
  //   setSelectedCountry(countryName);
  // };

  // // Используем useEffect для получения городов при изменении выбранной страны
  // useEffect(() => {
  //   // Создаем функцию, которая будет получать города для выбранной страны
  //   const fetchCities = () => {
  //     // Заменяем City.getAllCities() на ваш метод для получения городов
  //     const countryCities = City.getAllCities().filter(city => city.country === selectedCountry);
  //     setCities(countryCities);
  //   };

  //   // Проверяем, что выбрана какая-то страна перед вызовом fetchCities
  //   if (selectedCountry) {
  //     fetchCities();
  //   } else {
  //     // Если страна не выбрана, очищаем список городов
  //     setCities([]);
  //   }
  // }, [selectedCountry]); // Указываем зависимость от selectedCountry

  // Получаем список всех стран
  const allCountries = Country.getAllCountries();
  console.log(allCountries)

  // Создаем список опций для выпадающего списка стран
  const countryOptions = allCountries.map(country => (
    <option key={country.code} value={country.name}>{country.name}</option>
  ));

  // // Создаем список опций для выпадающего списка городов
  // const cityOptions = cities.map(city => (
  //   <option key={city.name} value={city.name}>{city.name}</option>
  // ));
  // console.log(cityOptions);

  return (
    <div>
      <div>
        <select onChange={country_owl}> 
          <option value="">Выберите страну</option>
          {countryOptions}
        </select>
      </div>
      <div>
        <select>
          <option value="">Выберите город</option>
          {/* {cityOptions} */}
        </select>
      </div>
    </div>
  );
}

export default App;