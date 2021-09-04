import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
const SignIn: React.FC = () => {
  return (
    <>
      <div className={styles.signInMain}>
        <form action='' method='get'>
          <div className={styles.signInHeader}>Sign In</div>
          <br />
          Username <br /> <input type='email' />
          <br />
          Password <br />
          <input type='password' />
          <br />
          <div className={styles.login}>
            <input type='submit' value='Log in' />
            <Link to='/' />
          </div>
          <div className={styles.signInlog}>
            <Link to='www.google.com'>Forgot Password ?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default SignIn
