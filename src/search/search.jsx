// import { Country, State, City } from 'country-state-city';
//  // Получение городов штата Махараштра, Индия
const data = require('countrycitystatejson');

const countries = data.getCountries();
const states = data.getStatesByShort('US');
const cities = data.getCities('US', 'California');
console.log(countries);
const Search = ()=>{
    return(
        <>
    <p>{}</p>
    <select class="form-control" id="select">
        <option velue='d'></option>
    </select>
</>
    )
}
export default Search;