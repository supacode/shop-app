import { IState, IAction } from './interfaces';

import { GET_HOME_PRODUCTS, GET_SHOP_PRODUCTS } from '../types';

const productReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case GET_HOME_PRODUCTS:
      state = { ...state, productsHome: action.payload };
      return state;
    case GET_SHOP_PRODUCTS:
      state = { ...state, productsShop: action.payload };
      return state;
    default:
      return state;
  }
};

export default productReducer;
