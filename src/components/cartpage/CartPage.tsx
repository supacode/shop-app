import React from 'react';

import CartItem from './CartItem.component';
import CartFooter from './CartFooter.component';

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
