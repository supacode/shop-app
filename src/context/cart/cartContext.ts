import { createContext } from 'react';

import { IState } from '../interfaces/cart-interfaces';

let initialCart: [] = [];

const savedCart = localStorage.getItem('cart');

if (savedCart) {
  initialCart = JSON.parse(savedCart);
}

export const initialState: IState = {
  loading: true,
  cartProducts: initialCart || [],
  loadedProducts: [],
  loadProducts: () => {},
  addCartProduct: () => {},
  removeCartItem: () => {},
  decreaseQuantity: () => {},
};

const CartContext = createContext<IState>(initialState);

export default CartContext;
