import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

function Standard({ onHeartClick, onAddToCart, heartIconCount, cartIconCount }) {
  const data = [
    { id: 7, img: "standard_1.webp", name: "Dairy Milk Crispello", quantity: 1, price: "Rs.40", paragraph:"Crispello is a finger format chocolate with light, crispy balls in the centre, covered with a thin layer of delicious Cadbury Dairy Milk. Take a bite of Cadbury Crispello to enjoy a crisp, novel eating experience. It comes in 4 finger format which makes it easy to share with friends and family. This chocolate bar is a perfect sweet to indulge in all alone or share as a chocolate gift pack on special occasions like birthdays and get-togethers."},
    { id: 8, img: "standard_2.webp", name: "Cadbury Dairy Milk Chocolate Crackle", quantity: 1,  price: "Rs.50", paragraph:" Cadbury Dairy Milk. Generously made with a glass and a half of milk, Cadbury Dairy Milk Crackle offers crunchy rice crispies in every piece. Cadbury Dairy Milk is the perfect meetha for sharing everyday moments of joy with your loved ones. This milk chocolate bar pack is perfect sweet for snacking & storing in the fridge, or as a chocolate gift pack for gifting on special occasions like birthdays and get-togethers. Every chocolate bar of Cadbury Dairy Milk is made from 100% sustainable cocoa. It is suitable for vegetarians." },
    { id: 9, img: "standard_3.webp", name: "Dairy Milk Choco Biscuit Crunch", quantity: 1, price: "Rs.200", paragraph:"Chocolaty crunch in a biscuit and the smoothness of delicious cream filling? Sounds amazing, right? For you to enjoy this, you can readily opt for Cadbury Dairy Milk Choco Biscuit. Arriving in a beautiful combination of crunch and cocoa and milk cream together, you get a delightful treat with every bite you chomp on. With the layers of biscuits, you get a fun taste of cocoa in the middle which makes it an ideal option for binge munching."},

  ];

  const [likedItems, setLikedItems] = useState([]); // State to track liked items

  // Function to handle heart icon click
  const handleHeartClick = (item) => {
    if (likedItems.includes(item.id)) {
      // If the item is already liked, remove it from the liked items array
      setLikedItems(likedItems.filter((id) => id !== item.id));
    } else {
      // Otherwise, add the item to the liked items array
      setLikedItems([...likedItems, item.id]);
    }
    onHeartClick(item); // Trigger the parent function for heart click (if needed)
  };

  return (
    <>
    <Header heartIconCount={heartIconCount}  
                    cartIconCount={cartIconCount}/>
      
    
        {data.map((value) => (
            <div className='container pt-5 basic_word'>
          <div className="row w-100" key={value.id}>
            <div className="col-sm-6 pt-5">
              <img
                src={require(`../src/images/${value.img}`)}
                alt={value.name}
                className="basic_img"
              />
              </div>
              <div className='col-sm-6 pt-5'>
             
                <h3 className=''>{value.name}</h3>
                <h2 className=''>{value.price}</h2>  
            <div className='d-flex'>
                <div>
                <i
                  className={`fa fa-heart ${likedItems.includes(value.id) ? 'text-danger' : ''}`} // Change color to red if liked
                  aria-hidden="true"
                  onClick={() => handleHeartClick(value)} // Trigger heart icon click
                ></i>
                <span className='p-2'>Like</span></div>
                <div>
                <i
                  className="fa fa-shopping-cart ps-5"
                  aria-hidden="true"
                  onClick={() => onAddToCart(value)} // Add item to cart
                ></i>
                <span className='p-2'>Cart</span></div>
                <p style={{ textAlign: "justify" }}>{value.paragraph}</p>
                </div>
                </div>
                
              </div>
              </div>
        
        ))}
     
      <Footer/>
    </>
  );
}

export default Standard;
