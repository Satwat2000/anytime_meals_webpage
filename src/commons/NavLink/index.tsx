import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './styles.module.css'

interface Props extends NavLinkProps {
  linkType: 'NavLink' | 'Link'
}

const CustomNavLink: React.FC<Props> = ({ children, linkType, ...linkProps }) => {
  return (
    <div className={styles.navlinkcontainer}>
      <NavLink
        className={linkType === 'NavLink' ? styles.navLink : styles.link}
        activeClassName={linkType === 'NavLink' ? styles.active : null}
        {...linkProps}>
        {children}
      </NavLink>
    </div>
  )
}

export default CustomNavLink
