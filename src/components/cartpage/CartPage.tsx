import React, { useContext } from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';
import CartContext from '../../context/cart/cartContext';
import Spinner from '../layout/Spinner';

const CartPage: React.FC = () => {
  // eslint-disable-next-line
  let { cartProducts, loadedProducts, loading } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="row">
        {loading && <Spinner />}
        {cartProducts.length > 0 &&
          loadedProducts.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}

        <CartFooter products={loadedProducts} />
      </div>
    </div>
  );
};

export default CartPage;
