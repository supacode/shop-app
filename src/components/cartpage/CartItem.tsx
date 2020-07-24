import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ICartItem } from '../../context/interfaces/cart-interfaces';
import CartContext from '../../context/cart/cartContext';

const CartItem: React.FC<{
  product: ICartItem;
}> = ({ product }) => {
  const { addCartProduct, removeCartItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item__product">
        <img
          src={require(`../../assets/img/products/${product.coverImage}`)}
          alt="Product"
        />
        <Link to="/products/123" className="cart-item__product--link">
          {/* <h3></h3> */}
          <p>#{product.id}</p>
        </Link>
      </div>
      <div className="cart-item__quantity">
        <button type="button" className="cart-item__quantity--reduce">
          -
        </button>
        <input
          className="cart-item__quantity--count"
          value={product.count}
          type="text"
          onChange={() => {}}
        />
        <button
          onClick={() => addCartProduct(product.id)}
          type="button"
          className="cart-item__quantity--add"
        >
          +
        </button>
      </div>
      <div className="cart-item__price">${product.price * product.count}</div>
      <button
        onClick={() => removeCartItem(product.id)}
        className="cart-item__remove"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
