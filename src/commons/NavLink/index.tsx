import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './styles.module.css'

interface Props extends NavLinkProps {
  isBrand: boolean
}

const CustomNavLink: React.FC<Props> = ({ children, isBrand, ...linkProps }) => {
  return (
    <div className={styles.navlinkcontainer}>
      <NavLink
        className={isBrand ? styles.brand : styles.link}
        activeClassName={isBrand ? styles.brand : styles.active}
        {...linkProps}>
        {children}
      </NavLink>
    </div>
  )
}

export default CustomNavLink
