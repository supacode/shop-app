import { createContext } from 'react';

import { IState } from '../interfaces/cart-interfaces';

const initialState: IState = {
  products: [],
};

const CartContext = createContext<IState>(initialState);

export default CartContext;
