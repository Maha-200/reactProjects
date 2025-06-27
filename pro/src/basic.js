import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

function Basic({ onHeartClick, onAddToCart, heartIconCount, cartIconCount }) {
  const data = [
    { id: 7, img: "basic_1.webp", name: "Dairy Milk Silk", quantity: 1, price: "Rs.80", paragraph:"The classic taste of Cadbury Dairy Milk chocolates only more creamy, smooth & indulging. Made with a glass and a half of milk. This milk chocolate bar with crunchy almonds is a perfect sweet to indulge in all alone or as a chocolate gift pack for gifting on special occasions like birthdays and get togethers. "},
    { id: 8, img: "basic_2.jpg", name: "Cadbury Dairy Milk Silk Bubbly Chocolate Bar", quantity: 1,  price: "Rs.200", paragraph:"Celebrate this Valentine’s day with Cadbury Dairy Milk Silk Bubbly Valentine pack. Cadbury Dairy Milk Silk Bubbly has the same smooth flavour that you would expect from Cadbury’s Silk with the added twist of bubbles (completely non-flavour altering). The bubbles simply make it a little bigger to bite into, a little airier when you are chewing. Keywords - Dairymilk." },
    { id: 9, img: "basic_3.jpeg", name: "Dairy Milk Heart Blush Chocolate", quantity: 1, price: "Rs.250", paragraph:" Cadbury Dairy Milk Silk is made with a glass and a half of milk. This milk chocolate bar is a perfect sweet to indulge in all alone or as a chocolate gift pack for gifting on special occasions like birthdays, Valentine's Day and get-togethers. Every bar of Cadbury Dairy Milk Silk is made from 100% sustainably sourced cocoa. It is suitable for vegetarians."},

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

export default Basic;
