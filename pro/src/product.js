import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

function Product({ onHeartClick, onAddToCart, heartIconCount, cartIconCount }) {
  const data = [
    { id: 1, img: "silk.webp", name: "Dairy Milk Silk", quantity: 1, price: "Rs.80" },
    { id: 2, img: "duo.webp", name: "Dairy Milk Duo", quantity: 1,  price: "Rs.200" },
    { id: 3, img: "caramel.webp", name: "Dairy Milk Caramel", quantity: 1, price: "Rs.250" },
    { id: 4, img: "crunchie.webp", name: "Dairy Milk Crunchies", quantity: 1, price: "Rs.250" },
    { id: 5, img: "twirl.webp", name: "Dairy Milk Twirl", quantity: 1, price: "Rs.150" },
    { id: 6, img: "white.webp", name: "Dairy Milk White Oreo", quantity: 1, price: "Rs.100" },

  ];

  const [likedItems, setLikedItems] = useState([]); 

  // Function to handle heart icon click
  const handleHeartClick = (item) => {
    if (likedItems.includes(item.id)) {
      
      setLikedItems(likedItems.filter((id) => id !== item.id));
    } else {
   
      setLikedItems([...likedItems, item.id]);
    }
    onHeartClick(item); 
  };

  return (
    <>
    <Header heartIconCount={heartIconCount}  
                    cartIconCount={cartIconCount}/>
      <h3 className='menu'>OUR MENU<br />Check Our Yummy Menu</h3>
      <div className="container-fluid d-flex justify-content-evenly w-100">
        {data.map((value) => (
          <div className="cards m-5" key={value.id}>
            <div className="col-lg-3 card style">
              <img
                src={require(`../src/images/${value.img}`)}
                alt={value.name}
                className="img1"
              />
              <div className='d-flex justify-content-center'>
              <i
                  className={`fa fa-heart ${likedItems.includes(value.id) ? 'text-danger' : ''}`} // Change color to red if liked
                  aria-hidden="true"
                  onClick={() => handleHeartClick(value)} // Trigger heart icon click
                ></i>
                <b className='pt-2'>{value.name}</b>
                
                <i
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                  onClick={() => onAddToCart(value)} // Add item to cart
                ></i>
                </div>
                <b className='pb-2'>{value.price}</b>  
              </div>
            </div>
        
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Product;
