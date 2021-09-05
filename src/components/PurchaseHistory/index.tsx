import React, { useState } from 'react'
import ItemDisplayTag from '../../commons/ItemDisplayTag'
import styles from './styles.module.css'
const Dec =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
const ad = {
  first: '100/3, Rabindralaya appartment',
  second: 'Raja Ram Mohan roy road',
  third: 'Hakimpara',
  fourth: 'near Swamiji more',
  city: 'Siliguri',
  state: 'West Bengal',
  country: 'India',
  pin: 734006,
}

const PurchaseHistoryPage: React.FC = () => {
  const [isChecked, setisChecked] = useState(false)
  const orderPlaced = () => {
    console.log('order Place')
  }
  let i = 0
  const totalAmount = 725
  const addressList = ['Home', 'Office']
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heading}>Purchase History</div>
      <div className={styles.cartItemListContainer}>
        <ItemDisplayTag
          imgName='Test'
          imgPath=''
          itemDescription={Dec}
          itemPrice={25}
          itemRating={4}
          itemTitle={'Veg Cheese Sandwich'}
        />
        <ItemDisplayTag
          imgName='Test'
          imgPath=''
          itemDescription={Dec}
          itemPrice={30}
          itemRating={4}
          itemTitle={'Cheese Corn Sandwich'}
        />
        <ItemDisplayTag
          imgName='Test'
          imgPath=''
          itemDescription={Dec}
          itemPrice={50}
          itemRating={4}
          itemTitle={'Paradice Pasta'}
        />
        <ItemDisplayTag
          imgName='Test'
          imgPath='images/foodItems/Cheese Corn Sandwitch.jpg'
          itemDescription={Dec}
          itemPrice={70}
          itemRating={4}
          itemTitle={'Veg Ramen'}
        />
      </div>
      <hr className={styles.lineBorder} />
      <div className={styles.totalAmountContainer}>
        <span className={styles.totalAmountLabel}>Total Amount</span>
        <span className={styles.totalAmountValue}> : &#x20b9; {totalAmount}</span>
      </div>
      <div className={styles.cartAddressWrapper}>
        <div className={styles.cartAddressTopContainer}>
          <div className={styles.heading}>Confirm Address</div>
          <select className={styles.addressSelector} name='Order adress' id='adress'>
            {addressList.map((value) => (
              <option key={i++} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.cartAddressBottomContainer}>
          <div className={styles.cartAddressText}>{ad.first},</div>
          <div className={styles.cartAddressText}>{ad.second},</div>
          <div className={styles.cartAddressText}>{ad.third},</div>
          <div className={styles.cartAddressText}>{ad.fourth},</div>
          <span className={styles.cartAddressText}>{ad.city},</span>
          <span className={styles.cartAddressText}>{ad.state},</span>
          <span className={styles.cartAddressText}>{ad.country}.</span>
          <div className={styles.cartAddressText}>Pin- {ad.pin}</div>
        </div>
      </div>
      <hr className={styles.lineBorder} />
      <div className={styles.checkoutWrapper}>
        <div className={styles.checkoutInfoContainer}>
          <div className={styles.infoTitle}>Please re-check the order before ordering </div>
          <div className={styles.infoSubTitle}>*** once ordered cannot be canceled</div>
          <div className={styles.checkoutAgreeContainer}>
            <input
              className={styles.checkoutAgreeButton}
              type='checkbox'
              name='isAgreed'
              onClick={() => setisChecked((prev) => !prev)}
            />
            <span className={styles.checkoutTerms}>I hear by confirm the and is obliged to pay the amount.</span>
          </div>
        </div>
        <div
          className={isChecked ? `${styles.checkoutButton} ${styles.checkoutButtonCursor}` : styles.checkoutButton}
          onClick={() => (isChecked ? orderPlaced() : null)}>
          Place Order !
        </div>
      </div>
    </div>
  )
}

export default PurchaseHistoryPage
