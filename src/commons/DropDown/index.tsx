import React, { useState, useRef, useEffect } from 'react'
import CustomNavLink from '../NavLink'
import styles from './styles.module.css'

const DropDown: React.FC = () => {
  const dropdownButtonRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [showDrop, setshowDrop] = useState(false)
  //handler
  const listner = (event: MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
      setshowDrop(true)
    } else if (dropdownButtonRef.current && dropdownButtonRef.current.contains(event.target as Node)) {
      setshowDrop((prevState) => !prevState)
    } else {
      setshowDrop(false)
    }
  }
  //use handler
  useEffect(() => {
    document.addEventListener('mousedown', listner)
    return () => {
      document.removeEventListener('mousedown', listner)
    }
  }, [dropdownRef, dropdownButtonRef])

  return (
    <>
      <div className={styles.dropdown}>
        <div ref={dropdownButtonRef} className={styles.dropDownBtn}>
          <i className={`fas fa-bars`} />
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={showDrop ? `${styles.dropdown_content} ${styles.show}` : styles.dropdown_content}>
        <CustomNavLink linkType='NavLink' to='/profile'>
          Profile
        </CustomNavLink>
        <CustomNavLink linkType='NavLink' to='/about'>
          About
        </CustomNavLink>
        <hr className={styles.dropdown_option_seperator} />
        <CustomNavLink linkType='NavLink' to='/'>
          Log out
        </CustomNavLink>
      </div>
    </>
  )
}

export default DropDown
