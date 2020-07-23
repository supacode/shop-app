import React, { useReducer } from 'react';

import productReducer from './productReducer';
import ProductContext from './productContext';
import { IState } from '../interfaces/product-interfaces';

const initialState: IState = {
  productsHome: [
    {
      id: 'p1',
      name: 'Product 1',
      price: 21.5,
      coverImage: 'product_1.png',
    },
    {
      id: 'p2',
      name: 'Product 2',
      price: 14,
      coverImage: 'product_2.png',
    },
    {
      id: 'p3',
      name: 'Product 3',
      price: 20,
      coverImage: 'product_3.png',
    },
  ],
  productsShop: [],
};

const ProductState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        productsHome: state.productsHome,
        productsShop: state.productsShop,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
