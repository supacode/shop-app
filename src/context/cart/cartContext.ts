import { createContext } from 'react';

import { ICart } from '../interfaces/cart-interfaces';

let initialCart: [] = [];

const savedCart = localStorage.getItem('cart');

if (savedCart) {
  initialCart = JSON.parse(savedCart);
}

export const initialState: ICart = {
  loading: true,
  products: initialCart || [],
  addCartProduct: () => {},
  removeCartItem: () => {},
  decreaseQuantity: () => {},
  isProductInCart: () => true,
};

const CartContext = createContext<ICart>(initialState);

export default CartContext;
