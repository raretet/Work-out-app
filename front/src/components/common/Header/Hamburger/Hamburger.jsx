import React from 'react'
import { menu } from './nemuBase'
import { NavLink } from 'react-router-dom'

import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'
import { useAuth } from '../../../../hooks/useAuth'
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter'

const Hamburger = () => {
  const { setIsAuth } = useAuth()
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideAlerter(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuth(true)
    setIsComponentVisible(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
        <button type="button" onClick={() => setIsComponentVisible(!isComponentVisible)}>
            <img src={isComponentVisible ? hamburgerCloseImage : hamburgerImage} alt="" height='24px'/>
        </button>

        <nav className={`${styles.menu} ${isComponentVisible ? styles.show : ''}`}>
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