import { IAction, ICart } from '../../interfaces/cart-interfaces';

import { cartTypes } from '../types';

const cartReducer = (state: ICart, action: IAction): ICart => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      if (state.products.find(prod => prod.id === action.payload.id)) {
        state = {
          ...state,
          products: [
            ...state.products.map(product => {
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
          products: [...state.products, { ...action.payload, count: 1 }],
        };
      }

      state = {
        ...state,
        loading: false,
        productsToAdd: [
          ...state.productsToAdd.filter(prod => prod !== action.payload.id),
        ],
      };

      localStorage.setItem('cart', JSON.stringify(state.products));

      return state;

    case cartTypes.LOAD_PRODUCT:
      state = {
        ...state,
        products: [
          ...state.products.map(prod => {
            if (prod.id === action.payload.id) {
              return {
                ...action.payload,
                count: prod.count,
                price: action.payload.price,
              };
            }
            return false;
          }),
        ],
      };

      return state;

    case cartTypes.SET_LOADING:
      state = {
        ...state,
        loading: action.payload.loading,
        productsToAdd: [...state.productsToAdd, action.payload.productId],
      };
      return state;
    case cartTypes.REMOVE_ITEM_CART:
      state = {
        ...state,
        products: [
          ...state.products.filter(product => product.id !== action.payload),
        ],
      };

      localStorage.setItem('cart', JSON.stringify(state.products));

      return state;

    case cartTypes.DECREASE_PRODUCT_QUANTITY:
      state = {
        ...state,
        products: [
          ...state.products.map(product => {
            if (product.id === action.payload) {
              if (product.count > 1) {
                return { ...product, count: product.count - 1 };
              }
            }

            return product;
          }),
        ],
      };
      localStorage.setItem('cart', JSON.stringify(state.products));

      return state;
    default:
      return state;
  }
};

export default cartReducer;
