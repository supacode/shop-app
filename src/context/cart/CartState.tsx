import React, { useReducer } from 'react';

import { IState } from '../interfaces/cart-interfaces';
import cartReducer from './cartReducer';
import CartContext from './cartContext';

import { ADD_TO_CART } from '../types';

const initialState: IState = {
  products: [{ id: 'p12', count: 1 }],
};

const CartState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCartProduct = (productId: number | string) => {
    dispatch({ type: ADD_TO_CART, payload: productId });
  };

  return (
    <CartContext.Provider value={{ products: state.products, addCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
