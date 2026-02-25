import React, { useState } from 'react'
import "../style/flashsale.css"
import { products } from '../../data/productlist';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';


const firstRow = products.slice(0, 3);
const secondRow = products.slice(3, 5);
function Flashsale() {
   const [selectedProduct, setSelectedProduct] = useState(null);
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
        <div className="dsss">
                    {firstRow.map((product) => (
                      <div className="main-products" key={product.id}>
                        {/* <span className="badge">new</span> */}
                        <div className="image-wrapper">
                          <img src={product.image} alt={product.name} className="watch-img" />
                          <div className="hover-icons">
                            <div className="icon-circle"><FaShoppingCart /></div>
                            <div className="icon-circle"><FaEye onClick={() => setSelectedProduct(product)} /></div>
                            <div className="icon-circle"><FaHeart /></div>
                          </div>
                        </div>
                        <h5>{product.name}</h5>
                        <h6>{product.price}</h6>
                        <div className="stars">★★★★★</div>
                      </div>
                    ))}
                  </div>
        
                  <div className="dsss">
                    {secondRow.map((product) => (
                      <div className="main-products" key={product.id}>
                        {/* <span className="badge">new</span> */}
                        <div className="image-wrapper">
                          <img src={product.image} alt={product.name} className="watch-img" />
                          <div className="hover-icons">
                            <div className="icon-circle"><FaShoppingCart /></div>
                            <div className="icon-circle"><FaEye onClick={() => setSelectedProduct(product)} /></div>
                            <div className="icon-circle"><FaHeart /></div>
                          </div>
                        </div>
                        <h5>{product.name}</h5>
                        <h6>{product.price}</h6>
                        <div className="stars">★★★★★</div>
                      </div>
                    ))}
                  </div>

        
      </div>

        {/* ✅ MODAL OUTSIDE SLIDER */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Flashsale
