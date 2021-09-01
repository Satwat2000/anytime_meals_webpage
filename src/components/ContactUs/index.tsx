import React, { FormEvent } from 'react'
import styles from './styles.module.css'

const ContactUs: React.FC = () => {
  const _handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.title}>Contact Us</div>
        <div className={styles.subTitle}>Send us a message</div>
      </div>
      <form className={styles.form}>
        <input
          type='text'
          name='userName'
          placeholder='Full name'
          className={`${styles.userInfo} ${styles.inputField}`}
        />
        <input
          type='email'
          name='userEmail'
          placeholder='Your email'
          className={`${styles.userInfo} ${styles.inputField}`}
        />
        <textarea
          name='userMessage'
          placeholder='Your message'
          className={`${styles.userMessage} ${styles.inputField}`}
        />
        <input type='submit' className={styles.submitButton} onClick={_handleSubmit} />
      </form>
    </div>
  )
}

export default ContactUs
