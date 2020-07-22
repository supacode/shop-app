import React from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';

const CartPage: React.FC = () => {
  return (
    <div className="cart">
      <div className="row">
        <CartItem />
        <CartFooter />
      </div>
    </div>
  );
};

export default CartPage;
