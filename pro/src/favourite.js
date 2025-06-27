import React, { useState } from 'react';

function Favourite({ selectedProducts, removeFromFavorites }) {
  const [showModal, setShowModal] = useState(false); 
  const [productToRemove, setProductToRemove] = useState(null); 

  // Show confirmation modal when the remove button is clicked
  const handleRemoveClick = (productId) => {
    setProductToRemove(productId); 
    setShowModal(true); 
  };

  // Handle confirmation to remove the product
  const handleConfirmRemove = () => {
    if (productToRemove) {
      removeFromFavorites(productToRemove); 
      setShowModal(false); 
    }
  };

  // Handle closing the modal without removing the product
  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div>
      {selectedProducts.length > 0 ? (
        <>
          <div className="selected-products-list">
            <h4 className="text-center">Selected Products:</h4>
            {selectedProducts.map((product) => (
              <div key={product.id} className="selected-product d-flex justify-content-evenly">
                <img
                  src={require(`../src/images/${product.img}`)}
                  alt={product.name}
                  className="selected-product-img"
                />
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveClick(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Confirmation Modal */}
          {showModal && (
            <div className="modal" style={modalStyle}>
              <div className="modal-content">
                <h4>Confirm Remove</h4>
                <p>Are you sure you want to remove this item from your favourite list?</p>
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

export default Favourite;
