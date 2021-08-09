import React, { useState, useRef, useEffect } from 'react'
import CustomNavLink from '../NavLink'
import styles from './styles.module.css'

const DropDown: React.FC = () => {
  const dropdownContainerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [showDrop, setshowDrop] = useState(false)
  //handler
  const listner = (event: MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target as Node)) {
      setshowDrop(true)
    } else if (dropdownContainerRef.current && dropdownContainerRef.current.contains(event.target as Node)) {
      console.log('I am toggling')
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
  }, [dropdownRef, dropdownContainerRef])

  return (
    <>
      <div className={styles.dropdown}>
        <div ref={dropdownContainerRef} className={styles.dropDownBtn}>
          <i className={`fas fa-bars`} />
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={showDrop ? `${styles.dropdown_content} ${styles.show}` : styles.dropdown_content}>
        <CustomNavLink isBrand={false} to='/profile'>
          Profile
        </CustomNavLink>
        <CustomNavLink isBrand={false} to='/about'>
          About
        </CustomNavLink>
        <hr className={styles.dropdown_option_seperator} />
        <CustomNavLink isBrand={false} to='/auth'>
          Log out
        </CustomNavLink>
      </div>
    </>
  )
}

export default DropDown
