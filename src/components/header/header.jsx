import { useState } from 'react';
import styles from './header.css';

const Header = ()=>{
    const pictures = ['/img/planet.svg'];

    return(
        <div className="header">
            <img className='logo' src={pictures[0]}/>
        </div>
    )
}

export default Header;