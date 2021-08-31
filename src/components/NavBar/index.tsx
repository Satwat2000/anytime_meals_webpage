import React, { useState } from 'react'
import NavLink from '../../commons/NavLink'
import styles from './styles.module.css'
import DropDown from '../../commons/DropDown'
import { useHistory } from 'react-router-dom'

const NavBar: React.FC = () => {
  const history = useHistory()

  const handleRoute = () => {
    history.push('/')
  }

  const [isNavOpaque, setisNavOpaque] = useState(true)

  return (
    <div className={styles.navBar}>
      <div className={isNavOpaque ? `${styles.nav} ${styles.navOpaque}` : styles.nav}>
        <div className={isNavOpaque ? styles.transperantNav : `${styles.transperantNav} ${styles.navTransparent}`} />
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
