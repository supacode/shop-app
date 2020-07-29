import React, { useContext } from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';
import CartContext from '../../context/cart/cartContext';

const CartPage: React.FC = () => {
  // eslint-disable-next-line
  let { products } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="row">
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}

        <CartFooter products={products} />
      </div>
    </div>
  );
};

export default CartPage;
