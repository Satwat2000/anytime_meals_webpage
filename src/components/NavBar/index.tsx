import React, { useEffect, useState } from 'react'
import NavLink from '../../commons/NavLink'
import styles from './styles.module.css'
import DropDown from '../../commons/DropDown'
import { useHistory, useLocation } from 'react-router-dom'

const NavBar: React.FC = () => {
  const history = useHistory()
  const path = useLocation().pathname
  const [isHome, setisHome] = useState(true)

  const handleRoute = () => {
    history.push('/home')
  }

  useEffect(() => {
    if (path === '/') {
      setisHome(true)
      document.body.style.margin = '0 0 0 0'
    } else {
      setisHome(false)
      document.body.style.margin = '60px 0 0 0'
    }
  }, [path])

  return (
    <div className={styles.navBar}>
      <div className={isHome ? `${styles.transperantNav} ${styles.navTransparent}` : styles.transperantNav} />
      <div className={isHome ? styles.nav : `${styles.nav} ${styles.navOpaque}`}>
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
