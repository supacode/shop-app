import { createContext } from 'react';

import { IState } from './interfaces';

const initialState: IState = {
  productsHome: [],
  productsShop: []
};

const ProductContext = createContext<IState>(initialState);

export default ProductContext;
