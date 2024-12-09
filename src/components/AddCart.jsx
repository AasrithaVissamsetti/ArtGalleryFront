import React, { useState } from 'react';
import './AddCart.css';
import SideNavbar from './CustSide';

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3Oht5d8iliftDB2tStCLYSH_0ChhaSdvBNGwxLcpd-kquVNWYGD803WxF1pblsRxr_I&usqp=CAU',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fVlfzuD5OKB_BiAOGSHwIUBkVJT4W78ljeAsBXOS_EeSKZpE5g03yPaJf6-HPErb7go&usqp=CAU',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      image: 'https://i.pinimg.com/236x/1e/f4/1d/1ef41d6133ab867e7817e3cf9ee965fd.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 35,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTdAlwaiz_10uZX9unP0gGFOO_ZpBijlrfw&s',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 67,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSjNEN0XYykWuDhUrpxAQEzTprhJ83zoC5Q&s',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 24,
      image: 'https://i0.wp.com/helenansell.com/wp-content/uploads/2021/05/Spotted-Pardalote-amongst-the-Isopogen-Canva-Rectangle-Canvas.png?resize=324%2C324&ssl=1',
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart); // Toggle cart visibility on button click
  };

  return (
    <div className="add-to-cart">
        <SideNavbar/>
      <h1 className="add-to-cart-title">Add To Cart</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* View Cart Button */}
      <div className="view-cart-button-container">
        <button className="view-cart-button" onClick={toggleCartVisibility}>
          {showCart ? 'Hide Cart' : 'View Cart'}
        </button>
      </div>

      {/* Cart Section */}
      {showCart && (
        <div className="cart">
          <h2 className="cart-title">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              {/* Display total amount */}
              <p className="total-amount">Total: ${calculateTotal()}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AddToCart;