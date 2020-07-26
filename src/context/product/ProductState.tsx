import React, { useReducer } from 'react';
import axios from 'axios';

import productReducer from './productReducer';
import ProductContext, { initialState } from './productContext';
import { GET_HOME_PRODUCTS, GET_PRODUCT, LOADING_PRODUCT } from '../types';

const ProductState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProductsHome = async () => {
    try {
      const res = await axios.get('/products');

      dispatch({ type: GET_HOME_PRODUCTS, payload: res.data.products });
    } catch (err) {
      console.log(err);
    }
  };

  const getProduct = async (slug: string) => {
    try {
      dispatch({ type: LOADING_PRODUCT });

      const res = await axios.get(`/products/${slug}`);

      dispatch({ type: GET_PRODUCT, payload: res.data.product });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productsHome: state.productsHome,
        productsShop: state.productsShop,
        loading: state.loading,
        product: state.product,
        getProductsHome,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
