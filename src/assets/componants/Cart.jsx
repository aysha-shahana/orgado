import React, { useState } from "react";
import { products } from "../../data/productlist";
import "../style/cart.css"

function Cart() {

  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 }
  ]);


  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };


  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <div className="cart-container">

      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} className="cart-img" />
              </td>

              <td>{item.name}</td>
              <td>{item.price}</td>

              <td>
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </td>

              <td>{item.price * item.quantity}</td>

              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="clear-btn" onClick={clearCart}>
        Clear cart
      </button>

      <div className="cart-total">
      
        <h3>Cart Totals</h3>
          <table className="subtotal">
            <tr>
        <td>Subtotal:</td>
        </tr>
        <tr>
        <td>Total:</td>
        </tr>
        
          </table>
        <button className="checkout-btn">
          Proceed to checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;
