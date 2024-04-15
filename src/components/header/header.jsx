import { useState } from 'react';
import styles from './header.css'

const Header = ()=>{
    const pictures = ['/img/planet.svg'];
    const [picture, SetPicture] = useState(0)

    return(

        <div className="header">
            <img src={pictures[picture]} alt="" />
        </div>
    )
}

export default Header;