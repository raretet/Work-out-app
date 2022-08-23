import React from "react";
import styles from './Header.module.scss'

import arrowImage from '../../../images/header/arrow.svg'
import userImage from '../../../images/header/user.svg'
import Hamburger from "./Hamburger/Hamburger"
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <header className={styles.header}>
          {location.pathname !== '/' ? (<button type="button" onClick={() => navigate(-1)}>
                <img src={arrowImage} alt="back"/>
            </button>) : 
            (<button type="button">
                <img src={userImage} alt=""/>
            </button>
            )}
            <Hamburger/>
        </header>
    );
}

export default Header