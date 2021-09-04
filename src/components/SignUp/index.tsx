import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
const SignUp: React.FC = () => (
  <>
    <div className={styles.signUpMain}>
      <form className={styles.form} action='' method='get'>
        <div className={styles.signUpHeader}>Sign Up</div>
        Username <br /> <input className={styles.input} type='text' />
        <br />
        Email address <br /> <input type='email' />
        <br />
        Password <br />
        <input type='password' />
        <br />
        <div className={styles.register}>
          <input type='submit' value='Register' />
          <br />
        </div>
        <div className={styles.signuplog}>
          Already have an account?<Link to='/SignIn'>Login</Link>
        </div>
      </form>
    </div>
  </>
)

export default SignUp
