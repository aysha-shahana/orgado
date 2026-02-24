import React, { useState } from "react";
import "../style/modal.css";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";

function ProductModal({ product, closeModal }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <div className="quickview-overlay" onClick={closeModal}>
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>

        <div className="quickview-content">
          {/* LEFT IMAGE SECTION */}
          <div className="quickview-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* RIGHT DETAILS SECTION */}
          <div className="quickview-details">
            <h2>{product.name}</h2>
            <h3 className="price">{product.price}</h3>

            <p className="stock">697 Pieces Available</p>

            {/* Quantity */}
            <div className="quantity-box">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                <FaMinus />
              </button>

              <span>{qty}</span>

              <button onClick={() => setQty(qty + 1)}>
                <FaPlus />
              </button>
            </div>

            {/* Cart Button */}
            <button className="cart-btn">View Cart</button>

            <p className="wishlist">♡ Add to Wishlist</p>

            <div className="share">
              <span>Share:</span>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
            </div>

            <div className="checkout">
              <h4>Guaranteed Safe Checkout</h4>
              <div className="cards">
                <img src="/visa.png" alt="" />
                <img src="/paypal.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
