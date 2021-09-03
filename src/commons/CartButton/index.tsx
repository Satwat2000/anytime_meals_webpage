import React, { useState } from 'react'
import styles from './styles.module.css'

interface cartButtonProps {
  id?: number
  isVertical: boolean
}

const CartButton: React.FC<cartButtonProps> = ({ isVertical }) => {
  const [itemQuantity, setitemQuantity] = useState(0)
  const decQuantity = () => setitemQuantity((prev) => (prev == 0 ? 0 : prev - 1))
  const incQuantity = () => setitemQuantity((prev) => prev + 1)
  const quant = itemQuantity === 0
  return (
    <div
      className={
        isVertical
          ? `${styles.buttonWrapper} ${styles.verticalWrapper}`
          : `${styles.buttonWrapper} ${styles.horizontalWrapper}`
      }>
      <div
        className={
          isVertical
            ? quant
              ? `${styles.buttonContainer} ${styles.incVertical} ${styles.button} ${styles.vertical} ${styles.hide}`
              : `${styles.buttonContainer} ${styles.incVertical} ${styles.button} ${styles.vertical}`
            : quant
            ? `${styles.buttonContainer} ${styles.incHorizantal} ${styles.button} ${styles.horizontal} ${styles.hide}`
            : `${styles.buttonContainer} ${styles.incHorizantal} ${styles.button} ${styles.horizontal}`
        }
        onClick={incQuantity}>
        +
      </div>
      <div
        className={
          isVertical
            ? quant
              ? `${styles.buttonContainer} ${styles.vertical} ${styles.quantity} ${styles.quantityVerticalMargin} ${styles.roundCornerQuantity}`
              : `${styles.buttonContainer} ${styles.vertical} ${styles.quantity}`
            : quant
            ? `${styles.buttonContainer} ${styles.horizontal} ${styles.quantity} ${styles.roundCornerQuantity}`
            : `${styles.buttonContainer} ${styles.horizontal} ${styles.quantity}`
        }
        onClick={() => {
          quant ? incQuantity() : null
        }}>
        {quant ? 'Buy' : itemQuantity}
      </div>
      <div
        className={
          isVertical
            ? quant
              ? `${styles.buttonContainer} ${styles.decVertical} ${styles.button} ${styles.vertical} ${styles.hide}`
              : `${styles.buttonContainer} ${styles.decVertical} ${styles.button} ${styles.vertical}`
            : quant
            ? `${styles.buttonContainer} ${styles.decHorizantal} ${styles.button} ${styles.horizontal} ${styles.hide}`
            : `${styles.buttonContainer} ${styles.decHorizantal} ${styles.button} ${styles.horizontal}`
        }
        onClick={decQuantity}>
        -
      </div>
    </div>
  )
}

export default CartButton
