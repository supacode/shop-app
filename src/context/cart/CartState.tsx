import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import cartReducer from './cartReducer';
import CartContext, { initialState } from './cartContext';

import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  DECREASE_PRODUCT_QUANTITY,
  SET_LOADING,
} from '../types';
import { ICartProduct } from '../interfaces/cart-interfaces';

const CartState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const addCartProduct = async (product: ICartProduct) => {
    dispatch({
      type: SET_LOADING,
      payload: { productId: product.id, loading: true },
    });

    try {
      const res = await axios.get(`/products/${product.slug}`);
      dispatch({ type: ADD_TO_CART, payload: res.data.product });
    } catch (err) {
      console.log(err);
    }
  };

  const removeCartProduct = (productId: number | string) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: productId });
  };

  const decreaseQuantity = (productId: number | string) => {
    dispatch({ type: DECREASE_PRODUCT_QUANTITY, payload: productId });
  };

  const isProductInCart = (productId: string) => {
    if (state.products.find((prod) => prod.id === productId)) return true;
    return false;
  };

  const isAddingToCart = (productId: string): boolean => {
    return state.loading && state.productsToAdd.includes(productId);
  };

  const calculateSubTotal = (products: ICartProduct[]): number => {
    const total = products.reduce(
      (acc, { price, count }) => acc + price * count,
      0,
    );
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        loading: state.loading,
        products: state.products,
        productsToAdd: state.productsToAdd,
        subTotal: calculateSubTotal(state.products),
        isAddingToCart,
        isProductInCart,
        addCartProduct,
        removeCartProduct,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
