import React from 'react'
import { FaEraser } from 'react-icons/fa'
import { products } from '../../data/productlist'
import "../style/wishlist.css";

function Wishlist() {
  return (
    <div>
      <section>
        <table>
          
          <thead>
            <tr>
              <th>Images</th>
              <th>Product</th>
              <th>Unit price</th>
              <th>Add to cart</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          
          <tbody>
           {products.slice(0, 3).map((product) => (

              <tr key={product.id}>
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className='tble-img'
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className='addtocart'>
                    Add to Cart
                  </button>
                </td>
                <td>{product.price}</td>
                <td><FaEraser /></td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
    </div>
  )
}

export default Wishlist
