import React from 'react'
import { menu } from './nemuBase'
import { NavLink } from 'react-router-dom'

import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'

const Hamburger = () => {
  const [show, setShow] = React.useState(false)

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <div className={styles.wrapper}>
        <button type="button" onClick={() => setShow(!show)}>
            <img src={show ? hamburgerCloseImage : hamburgerImage} alt="" height='24px'/>
        </button>

        <nav className={`${styles.menu} ${show ? styles.show : ''}`}>
            <ul>
              {menu.map((item, idx) => (
                <li key={`_menu_${idx}`}> 
                    <NavLink to={item.link}>{item.title}</NavLink>
                </li>
            ))}
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Hamburger