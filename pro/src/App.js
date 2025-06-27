import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import DashBoard from './dashboard';
import Header from './header';
import Banner from './banner';
import React, { useState } from 'react';
import Product from './product';
import Favourite from './favourite';
import Cart from './cart';
import Footer from './footer';
import Login from './login';
import Contact from './contact';
import Home from './home';
import Basic from './basic';
import Standard from './standard';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [heartIconCount, setHeartIconCount] = useState(0); 
  const [cartIconCount, setCartIconCount] = useState(0); 

  const [cartItems, setCartItems] = useState([]);

  // Function to handle heart icon click
  const handleHeartClick = (product) => {
    
    const isProductInFavorites = selectedProducts.find((item) => item.id === product.id);
  
    if (!isProductInFavorites) {
      
      setSelectedProducts((prev) => [...prev, product]);
      setHeartIconCount((prevCount) => prevCount + 1);
      console.log('Product added to favorites:', product);
    } else {

      console.log('Product is already in favorites');
    }
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
     
     const isProductInCart = cartItems.find((item) => item.id === product.id);
  
     if (!isProductInCart) {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartIconCount((prevCount) => prevCount + 1);
     }
     else{
      // If the product is already in the list, log this (you can also add additional handling here)
      console.log('Product is already in cart');
     }
  };

  // Function to remove a specific item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId); 
    setCartItems(updatedCart);
    setCartIconCount(updatedCart.length); 
  };

  // Function to handle product removal from the favorites list
  const removeFromFavorites = (productId) => {

    const updatedProducts = selectedProducts.filter(product => product.id !== productId);
    setSelectedProducts(updatedProducts); 
    setHeartIconCount(updatedProducts.length);
  };
  // Update the quantity of an item
  const handleUpdateQuantity = (productId, action) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        const updatedItem = { ...item };
        if (action === 'increase') {
          updatedItem.quantity += 1;
        } else if (action === 'decrease' && updatedItem.quantity > 1) {
          updatedItem.quantity -= 1;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
                   
                    <Route path='/home' element={<Home 
                    heartIconCount={heartIconCount} 
                    onHeartClick={handleHeartClick} 
                    cartIconCount={cartIconCount} 
                    onAddToCart={addToCart}
                    />} ></Route>
        <Route  
          path="/Header" 
          element={<Header 
                    heartIconCount={heartIconCount}  
                    cartIconCount={cartIconCount} 
                  />}
        ></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/product" element={<Product heartIconCount={heartIconCount}  
                    cartIconCount={cartIconCount} onHeartClick={handleHeartClick} onAddToCart={addToCart} />}></Route>
        <Route path="/favourite" element={<Favourite selectedProducts={selectedProducts} 
        removeFromFavorites={removeFromFavorites}/>}></Route>
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} onUpdateQuantity={handleUpdateQuantity}/>}
        ></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/basic' element={<Basic
        heartIconCount={heartIconCount}  
        cartIconCount={cartIconCount} onHeartClick={handleHeartClick} onAddToCart={addToCart} />}></Route>
        <Route path='/standard' element={<Standard heartIconCount={heartIconCount}  
        cartIconCount={cartIconCount} onHeartClick={handleHeartClick} onAddToCart={addToCart}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
