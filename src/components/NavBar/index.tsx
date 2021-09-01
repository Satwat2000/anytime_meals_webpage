import React from 'react'
import NavLink from '../../commons/NavLink'
import styles from './styles.module.css'
import DropDown from '../../commons/DropDown'
import { useHistory, useLocation } from 'react-router-dom'

const NavBar: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const handleRoute = () => {
    history.push('/')
  }

  const isNavOpaque = () => {
    const isHome = location.pathname === '/'
    if (isHome) {
      document.body.style.margin = '0 0 0 0'
    } else {
      document.body.style.margin = '60px 0 0 0'
    }
    return !isHome
  }

  return (
    <div className={styles.navBar}>
      <div className={isNavOpaque() ? styles.transperantNav : `${styles.transperantNav} ${styles.navTransparent}`} />
      <div className={isNavOpaque() ? `${styles.nav} ${styles.navOpaque}` : styles.nav}>
        <img src='/images/icons/Wlogo.png' alt='' className={styles.Wlogo} onClick={handleRoute} />
        <div className={styles.nav_options}>
          <NavLink to='/product' linkType='NavLink'>
            Purchase History
          </NavLink>
          <NavLink to='/cart' linkType='NavLink'>
            Cart
          </NavLink>
          <DropDown />
        </div>
      </div>
    </div>
  )
}
export default NavBar
