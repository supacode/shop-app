import { IAction, IState } from '../interfaces/cart-interfaces';

import { ADD_TO_CART } from '../types';

const cartReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ADD_TO_CART:
      state = { ...state, products: [...state.products, action.payload] };
      return state;
    default:
      return state;
  }
};

export default cartReducer;
