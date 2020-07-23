import { IAction, IState } from '../interfaces/cart-interfaces';

import { ADD_TO_CART } from '../types';

const cartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.products.find((prod) => prod.id === action.payload)) {
        state = {
          ...state,
          products: [
            ...state.products.map((product) => {
              if (product.id === action.payload) {
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
          products: [...state.products, { id: action.payload, count: 1 }],
        };
      }
      return state;

    default:
      return state;
  }
};

export default cartReducer;
