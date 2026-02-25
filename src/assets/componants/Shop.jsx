import React, { useState } from "react";
import "../style/shop.css";
import { FaEye, FaHeart, FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import { products } from "../../data/productlist";
import ProductModal from "../componants/ProductModal";

const ratings = [
  { stars: 5, count: 8 },
  { stars: 4, count: 6 },
  { stars: 3, count: 0 },
  { stars: 2, count: 2 },
  { stars: 1, count: 0 },
];

const firstRow = products.slice(0, 3);
const secondRow = products.slice(3, 5);

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div className="shop">
        <aside className="shop-sidebar">
          <div className="dropdown">
            <button
              className="vwallctgry dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              View All categories
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Testings</a></li>
              <li><a className="dropdown-item" href="#">HF</a></li>
              <li><a className="dropdown-item" href="#">Grocery & Staples</a></li>
              <li><a className="dropdown-item" href="#">Organic Food</a></li>
              <li><a className="dropdown-item" href="#">Biscuits & Snacks</a></li>
              <li><a className="dropdown-item" href="#">Fresh Fruits</a></li>
              <li><a className="dropdown-item" href="#">Fruit & vegetables</a></li>
            </ul>
          </div>

          <div className="radios">
            <h5>Categories</h5>
            <label><input type="radio" name="category" /> View All</label><br />
            <label><input type="radio" name="category" /> Testings</label><br />
            <label><input type="radio" name="category" /> Hf</label><br />
            <label><input type="radio" name="category" /> Grocery & Staples</label><br />
            <label><input type="radio" name="category" /> Organic Food</label><br />
            <label><input type="radio" name="category" /> Biscuits & Snacks</label><br />
            <label><input type="radio" name="category" /> Fresh Fruits</label><br />
            <label><input type="radio" name="category" /> Fruit & Vegetables</label>
          </div>

          <div className="ratings">
            <h5>Ratings</h5>
            {ratings.map((rating, index) => (
              <div key={index}>
                <label style={{ cursor: "pointer" }}>
                  <input
                    style={{ marginRight: "10px" }}
                    type="radio"
                    name="rating"
                  />
                  {[...Array(5)].map((_, i) =>
                    i < rating.stars ? (
                      <FaStar key={i} color="#f7941d" />
                    ) : (
                      <FaRegStar key={i} color="#f7941d" />
                    ),
                  )}
                  <span style={{ marginLeft: "8px", color: "#555" }}>
                    ({rating.count})
                  </span>
                </label>
              </div>
            ))}
          </div>

          <div className="bg-maitta">
            <h6>Freshly</h6>
            <h3>Maitta Potato</h3>
            <h6>From <b>$9.00</b></h6>
          </div>
        </aside>

        <main className="shop-main">
          <input
            type="text"
            placeholder="Search keyword..."
            className="search-shp"
          />

          <div className="dsss">
            {firstRow.map((product) => (
              <div className="main-products" key={product.id}>
                <span className="badge">new</span>
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
                <span className="badge">new</span>
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

          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              closeModal={() => setSelectedProduct(null)}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Shop;