import React from 'react'
import "../style/flashsale.css"
import { products } from '../../data/productlist'
function Flashsale() {
  return (

     <div className="flash-container">
      {/* LEFT SIDE */}
      <div className="left-section">
        <h2>Flash Sale!</h2>
        <div className="flash-card">
         
          <div className="flash-box">
             <img src="populer-thumb.webp" alt="populer-thumb" />
            <div className="new-circle">NEW</div>
            <h5 className='price-sign'> $ </h5>
  
           
            <p className="stock">Available : Stock</p>
          </div>
        </div>

        <div className="promo-card">
          <p>Freshly</p>
          <h3>Maitta Potato</h3>
          <span className="price">From $9.00</span>
          <div className="hot-badge">Hot Item</div>
          <img
            src="/images/bread.png"
            alt="Bread"
            className="promo-image"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">
        <div className="browse-header">
          <h2>You May Browse</h2>
          <div className="tabs">
            <span className="active">View All</span>
            <span>New Arrival</span>
            <span>Best Sale</span>
            <span>Trending</span>
          </div>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              {item.isNew && <span className="badge">new</span>}
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p className="product-price">${item.price}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashsale
