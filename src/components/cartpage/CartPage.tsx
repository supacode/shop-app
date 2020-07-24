import React, { useContext } from 'react';

import CartItem from './CartItem';
import CartFooter from './CartFooter';
import CartContext from '../../context/cart/cartContext';
import ProductContext from '../../context/product/productContext';
import { ICartItem } from '../../context/interfaces/cart-interfaces';

const CartPage: React.FC = () => {
  const { products: cartProducts } = useContext(CartContext);
  const { productsHome } = useContext(ProductContext);

  let products: ICartItem[] = [];

  cartProducts.forEach((prod) => {
    productsHome.map((product) => {
      if (prod.id === product.id) {
        products.push({ ...product, count: prod.count });
      }
      return products;
    });
  });

  return (
    <div className="cart">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}

        <CartFooter />
      </div>
    </div>
  );
};

export default CartPage;
