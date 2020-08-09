import { createContext } from 'react';

import { IState } from '../interfaces/product-interfaces';

export const initialState: IState = {
  productsHome: [],
  productsShop: [],
  loadingOne: true,
  loadingHome: true,
  getProductsHome: () => {},
  getProduct: () => {},
  product: {
    coverImage: '',
    id: '',
    name: '',
    price: 0,
    description: '',
    slug: '',
    images: [],
  },
};

const ProductContext = createContext(initialState);

export default ProductContext;
