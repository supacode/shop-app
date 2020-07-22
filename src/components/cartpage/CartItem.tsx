import React from 'react';
import { Link } from 'react-router-dom';

const CartItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <img
          src={require('../../assets/img/products/product_3.png')}
          alt="Product"
        />
        <Link to="/products/123" className="cart-item__product--link">
          <h3>Lorem, ipsum dolor.</h3>
          <p>#2321356</p>
        </Link>
      </div>
      <div className="cart-item__quantity">
        <button type="button" className="cart-item__quantity--reduce">
          -
        </button>
        <input className="cart-item__quantity--count" type="text" value="1" />
        <button type="button" className="cart-item__quantity--add">
          +
        </button>
      </div>
      <div className="cart-item__price">$150</div>
      <button className="cart-item__remove">&times;</button>
    </div>
  );
};

export default CartItem;
