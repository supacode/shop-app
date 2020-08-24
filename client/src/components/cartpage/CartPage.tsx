import React, { useContext, FormEvent } from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';
import CartContext from '../../context/cart/cartContext';

const CartPage: React.FC = () => {
  const { products, subTotal, checkout } = useContext(CartContext);

  const checkoutHandler = (e: FormEvent) => {
    e.preventDefault();

    checkout(products);
  };

  return (
    <div className="cart">
      <div className="row">
        {products.map(product => (
          <CartItem product={product} key={product.id} />
        ))}

        <CartFooter subTotal={subTotal} checkoutHandler={checkoutHandler} />
      </div>
    </div>
  );
};

export default CartPage;
