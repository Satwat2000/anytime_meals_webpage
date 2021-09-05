import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import CustomNavLink from '../../commons/NavLink'
const SignUp: React.FC = () => (
  <>
    <div className={styles.immg}>
      <img src={process.env.PUBLIC_URL + '/images/catagories/bann1.jpeg'} />
    </div>
    <div className={styles.authMain}>
      <div className={styles.signUpMain}>
        <form className={styles.form} action='' method='get'>
          <div className={styles.signUpHeader}>Sign Up</div>
          <div className={styles.cont}>
            Username <br /> <input type='text' />
            <br />
            Email address <br /> <input type='email' />
            <br />
            Password <br />
            <input type='password' />
            <br />
          </div>
          <div className={styles.register}>
            <CustomNavLink linkType='Link' to={'/home'}>
              <button type='submit'>Register</button>
            </CustomNavLink>
          </div>
          <div className={styles.signuplog}>
            Already have an account?<Link to='/'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  </>
)

export default SignUp
