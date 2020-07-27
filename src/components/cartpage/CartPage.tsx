import React, { useContext } from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';
import CartContext from '../../context/cart/cartContext';
import { ICartItem } from '../../context/interfaces/cart-interfaces';

const CartPage: React.FC = () => {
  const products: ICartItem[] = [];

  // eslint-disable-next-line
  const { products: cartProducts, loadedProducts } = useContext(CartContext);

  cartProducts.forEach((prod) => {
    loadedProducts.map(
      (product) =>
        product.id === prod.id && products.push({ ...prod, ...product }),
    );
  });

  return (
    <div className="cart">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}

        <CartFooter products={products} />
      </div>
    </div>
  );
};

export default CartPage;
