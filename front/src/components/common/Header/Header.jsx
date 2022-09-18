import React from "react";
import styles from './Header.module.scss'

import arrowImage from '../../../images/header/arrow.svg'
import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/dumbbell.svg'
import Hamburger from "./Hamburger/Hamburger"
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { isAuth } = useAuth()

    return (
        <header className={styles.header}>
          {location.pathname !== '/' ? (<button type="button" onClick={() => navigate(-1)}>
                <img src={arrowImage} alt="back"/>
            </button>) : 
            (<button type="button" onClick={() => navigate(isAuth ? '/auth' : '/profile')}>
                <img src={isAuth ? userImage : authImage} height='40' alt=""/>
            </button>
            )}
            <Hamburger/>
        </header>
    );
}

export default Header