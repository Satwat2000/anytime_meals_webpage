import React from 'react'
import ItemDisplayTag from '../../commons/ItemDisplayTag'
// import BasicCard from '../../components/BasicCard'
const HomePage: React.FC = () => {
  const Dec =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
  return (
    <div>
      <img src='images/header/image1.jpg' alt='' height='522px' width='100%' />
      <ItemDisplayTag
        imgName='Test'
        imgPath='images/foodItems/bk.jpeg'
        itemDescription={Dec}
        itemPrice={200}
        itemRating={4}
        itemTitle={'Ulla Laa Leee pp'}
      />
      <ItemDisplayTag
        imgName='Test'
        imgPath='images/foodItems/bk.jpeg'
        itemDescription={Dec}
        itemPrice={200}
        itemRating={4}
        itemTitle={'Ulla Laa Leee pp'}
      />
      <ItemDisplayTag
        imgName='Test'
        imgPath='images/foodItems/bk.jpeg'
        itemDescription={Dec}
        itemPrice={200}
        itemRating={4}
        itemTitle={'Ulla Laa Leee pp'}
      />
      <ItemDisplayTag
        imgName='Test'
        imgPath='images/foodItems/bk.jpeg'
        itemDescription={Dec}
        itemPrice={200}
        itemRating={4}
        itemTitle={'Ulla Laa Leee pp'}
      />
      <ItemDisplayTag
        imgName='Test'
        imgPath='images/foodItems/bk.jpeg'
        itemDescription={Dec}
        itemPrice={200}
        itemRating={4}
        itemTitle={'Ulla Laa Leee pp'}
      />
    </div>
  )
}

export default HomePage
