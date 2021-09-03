import React from 'react'
import AdressForm from '../Form_Adress'
import Form_UserData from '../Form_UserData'
import styles from './styles.module.css'

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.heading}>My Profile</div>
      <div className={styles.dpContainer}>
        <div className={styles.dpTitle}>Avatar</div>
        <img className={styles.dpAvatar} src='/images/icons/avatar.jpg' />
      </div>
      <hr className={styles.lineBorder} />
      <Form_UserData />
      <div className={styles.subTitleContainer}>
        <span className={styles.subTitle}>My Address</span>
        <div className={styles.iconWrapper}>
          <i className={'fas fa-plus'}></i>
        </div>
      </div>
      <AdressForm />
    </div>
  )
}

export default ProfilePage
