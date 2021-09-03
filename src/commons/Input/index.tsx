import React from 'react'
import styles from './styles.module.css'

interface inputProps {
  readonly?: boolean
  name: string
  title: string
  hint?: string
  ipShort?: boolean
  ipType: 'text' | 'number' | 'email'
}

const Input: React.FC<inputProps> = ({ title, hint, ipType, ipShort, name, readonly }) => {
  return (
    <div className={ipShort ? `${styles.wrapper} ${styles.ipShort}` : styles.wrapper}>
      <div className={styles.messageContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.fieldInfo}>{hint}</div>
      </div>
      <input className={styles.input} type={ipType} name={name} readOnly={readonly} />
    </div>
  )
}

export default Input
