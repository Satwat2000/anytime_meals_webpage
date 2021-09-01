import React from 'react'
import styles from './styles.module.css'

const ShopInfo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./images/icons/logo.png' alt='' className={styles.logo} />
      <div className={styles.info}>
        <i id={styles.icon} className='fas fa-phone'></i>
        <div className={styles.value}> +91 8900529875</div>
      </div>
      <div className={styles.info}>
        <i id={styles.icon} className='fas fa-envelope-open-text white'></i>
        <div className={styles.value}>anytimemeals@gmail.com</div>
      </div>
    </div>
  )
}

export default ShopInfo
