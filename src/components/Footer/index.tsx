import React from 'react'
import styles from './styles.module.css'
import ContactUs from '../ContactUs'
import ShopInfo from '../Info'
import Sitemap from '../Sitemap'

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.flexBox}>
            <ContactUs />
          </div>
          <div className={`${styles.flexBox} ${styles.siteMap}`}>
            <Sitemap />
          </div>
          <div className={styles.flexBox}>
            <ShopInfo />
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
