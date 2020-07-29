import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import cartReducer from './cartReducer';
import CartContext, { initialState } from './cartContext';

import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  DECREASE_PRODUCT_QUANTITY,
  LOAD_PRODUCT,
} from '../types';

const CartState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    (async () => await loadProducts())();
    // eslint-disable-next-line
  }, []);

  const loadProducts = async () => {
    let productUrl: any[] = [];
    state.cartProducts.forEach((product) => {
      productUrl.push(axios.get(`/products/${product.slug}`));
    });

    Promise.all(productUrl).then((responses) => {
      responses.forEach((res) => {
        dispatch({ type: LOAD_PRODUCT, payload: res.data.product });
      });
    });
  };

  const addCartProduct = (productId: number | string, slug: string) => {
    dispatch({ type: ADD_TO_CART, payload: { id: productId, slug } });
  };

  const removeCartItem = (productId: number | string) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: productId });
  };

  const decreaseQuantity = (productId: number | string) => {
    dispatch({ type: DECREASE_PRODUCT_QUANTITY, payload: productId });
  };

  return (
    <CartContext.Provider
      value={{
        loading: state.loading,
        cartProducts: state.cartProducts,
        loadedProducts: state.loadedProducts,
        addCartProduct,
        removeCartItem,
        decreaseQuantity,
        loadProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
