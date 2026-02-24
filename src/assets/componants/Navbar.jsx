import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { FaHamburger, FaHammer, FaMailBulk, FaMailchimp, FaPhone, FaPhoneAlt, FaVoicemail } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="optdisply">
       <nav className=" bg-light comp3">
          <img className="logo" src="public/logo-2.webp" alt="logo_img" />
            
          <div className="optdisply">
            <ul className="links_ul custom-nav">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className=" dropdown-parent">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>

                <ul className="custom-dropdown">
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                </ul>
              </li>
              <li>Pages</li>
              <li>Blog</li>
              <li>
                <Link
                  to="/contact"
                 className="nav-link"
                >
                  Contact
                </Link>
              </li>
              <li>Track Order</li>
            </ul>
            

            <div>
              <input
                className="input"
                type="text"
                placeholder="Search products..."
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag navicon"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart navicon"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </div>

            <div>
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person navicon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </Link>
            </div>
           
            
            <div className="hamburger" onClick={()=> setOpen(true)}>
              <FaHamburger/>
            </div>
             </div>  

             <div className={`mobile-menu ${open ? "active": ""}`}>
              <div className="mobile-header">
                <span className="logo"><img className="logo" src="public/logo-2.webp" alt="logo_img" /></span>
                <button onClick={()=> setOpen(false)}>X</button>
              </div>
              <input type="text" placeholder="What are you searching for?" className="mobile-search" />

              <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>PAGES</li>
                <li>CONTACT</li>
                <li>TRACK ORDER</li>
              </ul>
               <div className="contact-info">
                <h3>CONTACT INFO</h3>
                <p>12/A, Mirnada City Tower, NYC</p>
                <p><FaPhoneAlt/> +088889797697</p>
                <p><FaMailBulk/> support@gmail.com</p>
               </div>

             </div>



        </nav>
      </div>
    </>
  );
}

export default Navbar;
