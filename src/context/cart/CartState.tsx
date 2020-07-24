import React, { useReducer } from 'react';

import { IState } from '../interfaces/cart-interfaces';
import cartReducer from './cartReducer';
import CartContext from './cartContext';

import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  DECREASE_PRODUCT_QUANTITY,
} from '../types';

let initialCart: [] = [];

const savedCart = localStorage.getItem('cart');

if (savedCart) {
  initialCart = JSON.parse(savedCart);
}

const initialState: IState = {
  products: initialCart,
  addCartProduct: () => {},
  removeCartItem: () => {},
  decreaseQuantity: () => {},
};

const CartState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCartProduct = (productId: number | string) => {
    dispatch({ type: ADD_TO_CART, payload: productId });
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
        products: state.products,
        addCartProduct,
        removeCartItem,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
