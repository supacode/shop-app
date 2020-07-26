import { createContext } from 'react';

import { IState } from '../interfaces/product-interfaces';

export const initialState: IState = {
  productsHome: [],
  productsShop: [],
  loading: true,
  product: null,
  getProductsHome: () => {},
  getProduct: () => {},
};

const ProductContext = createContext<IState>(initialState);

export default ProductContext;
