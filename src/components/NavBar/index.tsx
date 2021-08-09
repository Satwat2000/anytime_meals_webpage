import React from 'react'
import NavLink from '../../commons/NavLink'
import styles from './styles.module.css'
import DropDown from '../../commons/DropDown'

const NavBar: React.FC = () => {
  return (
    <>
      <div className={styles.nav}>
        <NavLink to='/' isBrand={true} className={styles.nav_brand}>
          Anytime Meals
        </NavLink>
        <div className={styles.nav_options}>
          <NavLink to='/product' isBrand={false}>
            Purchase History
          </NavLink>
          <NavLink to='/cart' isBrand={false}>
            Cart
          </NavLink>
          <DropDown />
        </div>
      </div>
    </>
  )
}
export default NavBar
