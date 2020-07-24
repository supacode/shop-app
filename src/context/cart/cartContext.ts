import { createContext } from 'react';

import { IState } from '../interfaces/cart-interfaces';

const initialState: IState = {
  products: [],
  addCartProduct: () => {},
  removeCartItem: () => {},
  decreaseQuantity: () => {},
};

const CartContext = createContext<IState>(initialState);

export default CartContext;
