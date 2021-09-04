import React from 'react'
import styles from './styles.module.css'
const AboutPage: React.FC = () => {
  return (
    <>
      <div className={styles.imm}>
        <img src={process.env.PUBLIC_URL + '/images/catagories/aboutbanner.jpg'} />
      </div>
      <div className={styles.aboutHeading}>
        About Us
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentHeading}>
            <p>
              This academic project is being completed under the guidance of Minu Inba Shanthini Watson Benjamin mam
            </p>
            <h3>Done by</h3>
            <ul>
              <li>Satwat Kumar Ambashta</li>
              <li>Shefali Dewangan</li>
              <li>Anjali Jaiswal</li>
              <li>Prakash Kumar</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
