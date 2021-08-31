import React from 'react'
import NavLink from '../../commons/NavLink'
import styles from './styles.module.css'
import DropDown from '../../commons/DropDown'
import { useHistory } from 'react-router-dom'

const NavBar: React.FC = () => {
  const history = useHistory()

  const handleRoute = () => {
    history.push('/')
  }

  return (
    <>
      <div className={styles.nav}>
        <img src='/images/icons/Wlogo.png' alt='' className={styles.Wlogo} onClick={handleRoute} />
        <div className={styles.nav_options}>
          <NavLink to='/product' type='NavLink'>
            Purchase History
          </NavLink>
          <NavLink to='/cart' type='NavLink'>
            Cart
          </NavLink>
          <DropDown />
        </div>
      </div>
    </>
  )
}
export default NavBar
