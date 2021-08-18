import React from 'react'
import './styles.modules.css'
const Footer: React.FC = () => {
   return (
    <div className={styles.foot}>
      <span id={styles.spa}>Join us on</span>
      <span id={styles.spa1}>Contact Us</span>
      <ul className={styles.change}>
        <span id={styles.spa2}>About Us</span>
        <li>
          <img src={process.env.PUBLIC_URL + '/images/face.png'} alt='facebook' />
          Facebook
        </li>
        <br />
        <li>
          <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt='insta' />
          Instagram
        </li>
        <br />
        <li>
          <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt='lin' />
          LinkedIn
        </li>
      </ul>
    </div>
  )
}
export default Footer
