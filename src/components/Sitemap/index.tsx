import React from 'react'
import styles from './styles.module.css'
import CustomNavLink from '../../commons/NavLink'

const Sitemap: React.FC = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.title}>Sitemap</div>
        <div className={styles.subTitle}>All our pages</div>
      </div>
      <div className={styles.linkWrapper}>
        <div className={styles.link}>
          <CustomNavLink to='/' linkType='Link'>
            - Home
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/about' linkType='Link'>
            - About Us
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/profile' linkType='Link'>
            - Profile
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/purchasehistory' linkType='Link'>
            - Purchase history
          </CustomNavLink>
        </div>
        <div className={styles.link}>
          <CustomNavLink to='/review' linkType='Link'>
            - Review
          </CustomNavLink>
        </div>
      </div>
    </div>
  )
}

export default Sitemap
