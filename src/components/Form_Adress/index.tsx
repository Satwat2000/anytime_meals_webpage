import React, { useState } from 'react'
import Input from '../../commons/Input'
import styles from './styles.module.css'

const AdressForm: React.FC = () => {
  const [edit, setedit] = useState(true)

  const handleSubmit = () => {
    setedit((prevState) => !prevState)
  }

  const handleDelete = () => {
    console.log('delete operation')
  }

  return (
    <form action='#' className={styles.useDataWrapper} onSubmit={handleSubmit}>
      <div className={styles.userData}>
        <Input title='Name' hint='Save adress with which name?' ipType='text' name='addrName' readonly={edit} />
        <div className={styles.addressEditWraper}>
          <button className={styles.iconWrapper}>
            {edit ? <i className={'fas fa-edit'}></i> : <i className='fas fa-check'></i>}
          </button>
          <div className={styles.iconWrapper} onClick={handleDelete}>
            <i className={'fas fa-trash-alt'}></i>
          </div>
        </div>
      </div>
      <div className={styles.userData}>
        <Input title='Home name' hint='First line in address' ipType='text' name='firstLine' readonly={edit} />
        <Input title='Street name' hint='Second line in address' ipType='text' name='secondLine' readonly={edit} />
      </div>
      <div className={styles.userData}>
        <Input title='Area name' hint='Third line in address' ipType='text' name='thirdLine' readonly={edit} />
        <Input title='Land mark' hint='Fourth line in address' ipType='text' name='forthLine' readonly={edit} />
      </div>
      <div className={styles.userData}>
        <Input title='State' ipType='text' ipShort={true} name='state' readonly={edit} />
        <Input title='Contry' ipType='text' ipShort={true} name='contry' readonly={edit} />
        <Input title='City' ipType='text' ipShort={true} name='city' readonly={edit} />
        <Input title='Pincode' ipType='number' ipShort={true} name='pincode' readonly={edit} />
      </div>
    </form>
  )
}

export default AdressForm
