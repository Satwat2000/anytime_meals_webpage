import React from 'react'
import { Link } from 'react-router-dom'
import CustomNavLink from '../../commons/NavLink'
import styles from './styles.module.css'

const SignIn: React.FC = () => {
  return (
    <>
      <div className={styles.immg}>
        <img src={process.env.PUBLIC_URL + '/images/catagories/bann1.jpeg'} />
      </div>
      <div className={styles.authMain}>
        <div className={styles.signInMain}>
          <form className={styles.form} method='get'>
            <div className={styles.signInHeader}>Sign In</div>
            <br />
            Username <br /> <input type='text' />
            <br />
            Password <br />
            <input type='password' />
            <br />
            <div className={styles.login}>
              <CustomNavLink linkType='Link' to={'/home'}>
                <button type='submit'>Log in</button>
              </CustomNavLink>
            </div>
          </form>
          <div className={styles.signInlog}>
            <Link to={'/'}>Forgot Password ?</Link>
            OR
          </div>
          <div className={styles.signInReg}>
            New User?<Link to={'/register'}>Create Account</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
