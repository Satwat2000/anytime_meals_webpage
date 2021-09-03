import React, { useState } from 'react'
import CartButton from '../CartButton'
import styles from './styles.module.css'

interface ItemProps {
  imgPath: string
  imgName: string
  itemTitle: string
  itemRating: number
  itemPrice: number
  itemDescription: string
}

const ItemDisplayTag: React.FC<ItemProps> = ({ itemDescription, itemTitle, itemPrice }) => {
  const [isArrowUp, setisArrowUp] = useState(true)

  const src = 'images/foodItems/' + itemTitle + '.jpg'
  console.log(src)
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={src} className={isArrowUp ? ` ${styles.imgSmall}` : `${styles.img} ${styles.imgBig}`} />
      </div>
      <div className={isArrowUp ? styles.itemInfo : `${styles.itemInfo} ${styles.col}`}>
        <div className={styles.about}>
          <div className={styles.itemTitlePriceContainer}>
            <div className={`${styles.itemTitlePriceText} ${styles.title}`}>{itemTitle}</div>
            <div className={`${styles.itemTitlePriceText} ${styles.price}`}>
              <span>&#x20b9;</span> {itemPrice}
            </div>
          </div>
          <div className={isArrowUp ? `${styles.desc} ${styles.descSmall}` : `${styles.desc} ${styles.descBig}`}>
            {itemDescription}
          </div>
        </div>
        <div className={isArrowUp ? styles.buttonContainerVertical : styles.buttonContainerHorizontal}>
          <CartButton id={1} isVertical={isArrowUp} />
        </div>
      </div>
      <div className={styles.iconContainer} onClick={() => setisArrowUp((prev) => !prev)}>
        <i className={isArrowUp ? 'fas fa-caret-down fa-2x' : 'fas fa-caret-up fa-2x'} />
      </div>
    </div>
  )
}

export default ItemDisplayTag
