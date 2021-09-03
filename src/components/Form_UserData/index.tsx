import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../../commons/Input'
// import { useSelector } from 'react-redux'
// import { getUserData } from '../../redux/profile_form/selectors'

const Form_UserData: React.FC = () => {
  // const userData = useSelector(getUserData)

  const [edit, setedit] = useState(true)

  const handleSubmit = () => {
    setedit((prevState) => !prevState)
  }

  return (
    <div>
      <form action='#' className={styles.useDataWrapper} onSubmit={handleSubmit}>
        <div className={styles.dataEditWraper}>
          <button className={styles.iconWrapper} type='submit'>
            {edit ? <i className={'fas fa-edit'}></i> : <i className='fas fa-check'></i>}
          </button>
        </div>
        <div className={styles.userData}>
          <Input title='Display name' hint='Your user name' ipType='text' name='displayName' readonly={edit} />
          <Input title='Full name' hint='How do you want to be called?' ipType='text' name='fullName' readonly={edit} />
        </div>
        <hr className={`${styles.lineBorder} ${styles.lineMargin}`} />
        <div className={styles.userData}>
          <Input
            title='Email address'
            hint='For notifications and logging in'
            ipType='email'
            name='address'
            readonly={edit}
          />
          <Input
            title='Phone number'
            hint='For recieving notifictaions'
            ipType='number'
            name='phoneNumber'
            readonly={edit}
          />
        </div>
        <hr className={`${styles.lineBorder} ${styles.lineMargin}`} />
      </form>
    </div>
  )
}

export default Form_UserData
