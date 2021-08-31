import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './styles.module.css'

interface Props extends NavLinkProps {
  type: 'Brand' | 'NavLink' | 'Link'
}

const CustomNavLink: React.FC<Props> = ({ children, type, ...linkProps }) => {
  return (
    <div className={styles.navlinkcontainer}>
      <NavLink
        className={type === 'Brand' ? styles.brand : type === 'NavLink' ? styles.navLink : styles.link}
        activeClassName={type !== 'NavLink' ? styles.brand : styles.active}
        {...linkProps}>
        {children}
      </NavLink>
    </div>
  )
}

export default CustomNavLink
