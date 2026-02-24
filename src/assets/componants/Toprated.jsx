import React from 'react'

import "../style/toprated.css"
import { products } from '../../data/productlist';

function Toprated() {

    const topRated = [
  {
    id: 1,
    title: "Premium Broad bean",
    price: 40,
    image: "/images/bean.png",
  },
  {
    id: 2,
    title: "Triangular shaped chips",
    price: 9,
    image: "/images/chips.png",
  },
  {
    id: 3,
    title: "Ceramic Coffee Mug",
    price: 12,
    image: "/images/mug.png",
  },
];

const popular = [
  { id: 1, price: 20 },
  { id: 2, price: 18 },
  { id: 3, price: 15 },
];

  return (
    <div className="home-container">

      {/* LEFT SIDEBAR */}
      <div className="left-sidebar">
        <div className="testimonial-card">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="profile-img"
          />
          <h4>Md Tanzil Mia</h4>
          <p className="quote">
            " All the generators on the Internet tend to repeat predefined,
            making this the true generator human made pesticides and fertilizers
            genetically "
          </p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="app-card">
          <h4>Download the App</h4>
          <p>Make your life easier</p>
          <div className="store-buttons">
            <img src="/images/appstore.png" alt="appstore" />
            <img src="/images/playstore.png" alt="playstore" />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* TOP BANNERS */}
        <div className="top-banners">
          <div className="banner">
            <div className='meat-img'>
              <p>Organic</p>
              <h3>Meat & Milk</h3>
              <span>Premium quality meat & milk</span><br />
              <button>Shop Now</button>
            </div>
            
          </div>

          <div className="banner">
            <div className='vegtable'>
              <p>Organic</p>
              <h3>Vegetables</h3>
              <span>Premium quality Vegetables</span><br />
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="products-row">

          {/* TOP RATED */}
          <div className="top-rated">
            <div className="section-header">
              <h2>Top Rated</h2>
              <span>View All →</span>
            </div>
             <div className='top-border'>
            {products.slice(0,3).map((product) => (
              <div className="vertical-product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p className="price">{product.price}</p>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* POPULAR */}
          <div className="popular">
            <div className="section-header">
              <h2>Popular</h2>
              <span>View All →</span>
            </div>
              <div className='top-border'>
            {popular.map((item) => (
              <div className="popular-item" key={item.id}>
                <div className="thumb"><img src="populer-thumb.webp" alt="populer-thumb" /></div>
                <div>
                  <p className="price">$</p>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* RIGHT PROMO */}
          <div className="right-promo">
            <div className="promo-text">
              <p>Freshly</p>
              <h3>Maitta Potato</h3>
              <span>From $9.00</span>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};
export default Toprated