import { IState, IAction } from '../../interfaces/product-interfaces';

import { productTypes } from '../types';

const productReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case productTypes.LOADING_PRODUCT:
      state = { ...state, loadingOne: true };
      return state;
    case productTypes.GET_PRODUCT:
      state = { ...state, product: action.payload, loadingOne: false };
      return state;
    case productTypes.GET_HOME_PRODUCTS:
      state = { ...state, productsHome: action.payload, loadingHome: false };
      return state;
    case productTypes.GET_SHOP_PRODUCTS:
      state = { ...state, productsShop: action.payload, loadingShop: false };
      return state;
    default:
      return state;
  }
};

export default productReducer;
