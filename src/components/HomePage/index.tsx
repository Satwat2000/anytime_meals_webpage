import React from 'react'
import ItemDisplayTag from '../../commons/ItemDisplayTag'
import styles from './styles.module.css'
// import BasicCard from '../../components/BasicCard'
const HomePage: React.FC = () => {
  const Dec =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
  return (
    <div>
      <img src='images/header/image1.jpg' alt='' height='522px' width='100%' />
      <div className={styles.homeWrapper}>
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
    </div>
  )
}

export default HomePage
