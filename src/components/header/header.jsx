import { useState } from 'react';
import styles from './header.css';
import logo from './planet.svg'
import search from './search.svg'

const Header = ()=>{
        return(
        <div className="header">
            <img className='logo' src={logo} alt='logo'/>
            <h1>KrytelykyWeather</h1>
            <input type="text"/>
            <img src={search} className='searchButton'/>
            <a href="https://github.com/clonebidon/test-cra-project" className="dev"/>
            <div className="donut"/>
        </div>
    )
}

export default Header;