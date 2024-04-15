import { useState } from 'react';
import styles from './header.css';
import logo from './planet.svg'

const Header = ()=>{
    return(
        <div className="header">
            <img className='logo' src={logo} alt='logo'/>
        </div>
    )
}

export default Header;