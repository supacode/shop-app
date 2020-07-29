import { IAction, IState } from '../interfaces/cart-interfaces';

import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  DECREASE_PRODUCT_QUANTITY,
  LOAD_PRODUCT,
  SET_LOADING,
} from '../types';

const cartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartProducts.find((prod) => prod.id === action.payload.id)) {
        state = {
          ...state,
          cartProducts: [
            ...state.cartProducts.map((product) => {
              if (product.id === action.payload.id) {
                return { ...product, count: product.count + 1 };
              } else {
                return product;
              }
            }),
          ],
        };
      } else {
        state = {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            { ...action.payload, count: 1 },
          ],
        };
      }

      localStorage.setItem('cart', JSON.stringify(state.cartProducts));

      return state;

    case LOAD_PRODUCT:
      state = {
        ...state,
        loadedProducts: [
          // eslint-disable-next-line array-callback-return
          ...state.cartProducts.map((prod) => {
            if (prod.id === action.payload.id) {
              return {
                ...action.payload,
                count: prod.count,
                price: action.payload.price,
              };
            }
          }),
        ],
      };

      return state;

    case SET_LOADING:
      state = { ...state, loading: action.payload };
      return state;
    case REMOVE_ITEM_CART:
      state = {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter(
            (product) => product.id !== action.payload,
          ),
        ],
      };

      localStorage.setItem('cart', JSON.stringify(state.cartProducts));

      return state;

    case DECREASE_PRODUCT_QUANTITY:
      state = {
        ...state,
        cartProducts: [
          ...state.cartProducts.map((product) => {
            if (product.id === action.payload) {
              if (product.count > 1) {
                return { ...product, count: product.count - 1 };
              }
            }

            return product;
          }),
        ],
      };
      localStorage.setItem('cart', JSON.stringify(state.cartProducts));

      return state;
    default:
      return state;
  }
};

export default cartReducer;
