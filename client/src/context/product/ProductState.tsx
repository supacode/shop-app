import React, { useReducer } from 'react';
import axios from 'axios';

import productReducer from './productReducer';
import ProductContext, { initialState } from './productContext';
import { productTypes } from '../types';

const ProductState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProduct = async (slug: string) => {
    try {
      dispatch({ type: productTypes.LOADING_PRODUCT });

      const res = await axios.get(`/products/${slug}`);

      dispatch({ type: productTypes.GET_PRODUCT, payload: res.data.product });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsHome = async () => {
    try {
      const res = await axios.get('/products');

      dispatch({
        type: productTypes.GET_HOME_PRODUCTS,
        payload: res.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsShop = async () => {
    try {
      const res = await axios.get('/products');
      dispatch({
        type: productTypes.GET_SHOP_PRODUCTS,
        payload: res.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productsHome: state.productsHome,
        productsShop: state.productsShop,
        loadingOne: state.loadingOne,
        loadingHome: state.loadingHome,
        loadingShop: state.loadingShop,
        product: state.product,
        getProduct,
        getProductsHome,
        getProductsShop,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
