import React from 'react'
import styles from './styles.module.css'
import CustomNavLink from '../../commons/NavLink'

const Sitemap: React.FC = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.title}>Sitemap</div>
        <div className={styles.subTitle}>All our pages</div>
      </div>
      <div className={styles.linkWrapper}>
        <div className={styles.link}>
          <CustomNavLink to='/' linkType='Link'>
            <span className={styles.dash}>-</span> Home
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/about' linkType='Link'>
            <span className={styles.dash}>-</span> About Us
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/profile' linkType='Link'>
            <span className={styles.dash}>-</span> Profile
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/purchasehistory' linkType='Link'>
            <span className={styles.dash}>-</span> Purchase history
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/review' linkType='Link'>
            <span className={styles.dash}>-</span> Review
          </CustomNavLink>
        </div>
      </div>
    </>
  )
}

export default Sitemap
