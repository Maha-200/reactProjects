import React, { useState } from 'react';

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const [showModal, setShowModal] = useState(false); 
  const [itemToRemove, setItemToRemove] = useState(null);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('Rs.', '').trim()); 
    return total + price * item.quantity; 
  }, 0);

  // Show confirmation modal
  const handleRemoveClick = (productId) => {
    setItemToRemove(productId);
    setShowModal(true); 
  };

  // Handle confirmation (Yes)
  const handleConfirmRemove = () => {
    onRemoveFromCart(itemToRemove); 
    setShowModal(false);
  };

  // Handle cancellation (No)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle increasing the quantity of a product
  const handleIncreaseQuantity = (productId) => {
    onUpdateQuantity(productId, 'increase'); 
  };

  // Handle decreasing the quantity of a product
  const handleDecreaseQuantity = (productId) => {
    onUpdateQuantity(productId, 'decrease'); 
  };

  return (
    <div>
      <h3>Your Cart</h3>
      {cartItems.length > 0 ? (
        <>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-container">
                <div className='row w-100'>
                  <div className='col-sm-6'>
                    <div className='row'>
                    <div className='col-sm-6'>
                    <img
                  src={require(`../src/images/${item.img}`)}
                  alt={item.name}/>
                  </div>
                    <div className='col-sm-6'>
                
                <p>{item.name} - {item.price} x {item.quantity}</p> 
                    </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                  <p onClick={() => handleIncreaseQuantity(item.id)} className='incr-btn'><i class="fa fa-plus-square" aria-hidden="true"></i></p>
                <p onClick={() => handleDecreaseQuantity(item.id)} className='dec-btn'><i class="fa fa-minus-square" aria-hidden="true"></i></p>
                <p>Price Rs.{parseFloat(item.price.replace('Rs.', '').trim()) * item.quantity}</p> {/* Price for this item */}
                <button
                  className="btn"
                  onClick={() => handleRemoveClick(item.id)} 
                >
                  Remove
                </button>
         
                  </div>

                  </div>
                
                     </div>
            ))}
            <h4 className="text-center">Total Price: Rs.{totalPrice}</h4>
          </div>

          {/* Confirmation Modal */}
          {showModal && (
            <div className="modal" style={modalStyle}>
              <div className="modal-content">
                <h4>Confirm Remove</h4>
                <p>Are you sure you want to remove this item from your cart?</p>
                <div className="modal-actions">
                  <button className="btn btn-secondary" onClick={handleCloseModal}>
                    No
                  </button>
                  <button className="btn btn-danger" onClick={handleConfirmRemove}>
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>No products selected yet.</p>
      )}
    </div>
  );
}

// Modal style
const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

export default Cart;
