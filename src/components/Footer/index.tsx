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
          <ContactUs />
          <Sitemap />
          <ShopInfo />
        </div>
      </div>
    </>
  )
}
export default Footer
