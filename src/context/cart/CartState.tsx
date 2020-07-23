import React, { useReducer } from 'react';

import { IState } from '../interfaces/cart-interfaces';
import cartReducer from './cartReducer';
import CartContext from './cartContext';

const initialState: IState = {
  products: [{ id: 'p12', count: 1 }],
};

const CartState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ products: state.products }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
