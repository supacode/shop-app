import { createContext } from 'react';

import { IState } from '../interfaces/product-interfaces';

export const initialState: IState = {
  productsHome: [],
  productsShop: [],
  loading: true,
  getProductsHome: () => {},
};

const ProductContext = createContext<IState>(initialState);

export default ProductContext;
