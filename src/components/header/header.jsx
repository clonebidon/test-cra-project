import { useState } from 'react';
import styles from './header.css';
import logo from './planet.svg'

const Header = ()=>{
        return(
        <div className="header">
            <img className='logo' src={logo} alt='logo'/>
            <h1>KrytelykyWeather</h1>
            <input type="text"/>
            <div className='searchButton'/>
            <div className="donut"/>
        </div>
    )
}

export default Header;