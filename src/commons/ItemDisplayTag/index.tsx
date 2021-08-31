import React from 'react'
import styles from './styles.module.css'

interface ItemProps {
  imgPath: string
  imgName: string
  itemTitle: string
  itemRating: number
  itemPrice: number
  itemDescription: string
}

const ItemDisplayTag: React.FC<ItemProps> = ({
  imgPath,
  imgName,
  itemDescription,
  itemRating,
  itemTitle,
  itemPrice,
}) => {
  const rating = () => {
    switch (itemRating) {
      case 5:
        return '🧡🧡🧡🧡🧡'
      case 4:
        return '🧡🧡🧡🧡🤍'
      case 4:
        return '🧡🧡🧡🤍🤍'
      case 4:
        return '🧡🧡🤍🤍🤍'
      case 4:
        return '🧡🤍🤍🤍🤍'
    }
  }
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.LeftContainer}>
        <img className={styles.Image} src={imgPath} alt={process.env.PUBLIC_URL + imgName} />
      </div>
      <div className={styles.CenterContainer}>
        <div className={styles.itemTitle}>{itemTitle}</div>
        <div className={styles.itemContainer}>
          <div className={styles.itemRating}>{rating()}</div>
          <div className={styles.itemDescription}>{itemDescription}</div>
        </div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.itemPrice}>Rs. {itemPrice}</div>
        <div className={styles.itemContainer}>
          <div className={styles.itemQuantity}> 2 </div>
          <div className={styles.itemQuantityButton}>
            <button className={styles.incButton}>+</button>
            <button className={styles.decButton}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDisplayTag
