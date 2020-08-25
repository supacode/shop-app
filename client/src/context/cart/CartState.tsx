import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import cartReducer from './cartReducer';
import CartContext, { initialState } from './cartContext';

import { cartTypes } from '../types';
import { ICartProduct } from '../../interfaces/cart-interfaces';

const CartState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const addCartProduct = async (product: ICartProduct) => {
    dispatch({
      type: cartTypes.SET_LOADING,
      payload: { productId: product.id, loading: true },
    });

    try {
      const res = await axios.get(`/products/${product.slug}`);
      dispatch({ type: cartTypes.ADD_TO_CART, payload: res.data.product });
    } catch (err) {
      console.log(err);
    }
  };

  const removeCartProduct = (productId: number | string) => {
    dispatch({ type: cartTypes.REMOVE_ITEM_CART, payload: productId });
  };

  const decreaseQuantity = (productId: number | string) => {
    dispatch({ type: cartTypes.DECREASE_PRODUCT_QUANTITY, payload: productId });
  };

  const isProductInCart = (productId: string) => {
    if (state.products.find(prod => prod.id === productId)) return true;
    return false;
  };

  const isAddingToCart = (productId: string): boolean => {
    return state.loading && state.productsToAdd.includes(productId);
  };

  const calculateSubTotal = (products: ICartProduct[]) => {
    const total = products.reduce(
      (acc, { price, count }) => acc + price * count,
      0,
    );
    return +total.toFixed(2);
  };

  const checkout = async (products: ICartProduct[]) => {
    // TODO: Create checkout to server

    const orders = products.map(prod => ({
      id: prod.id,
      count: prod.count,
      slug: prod.slug,
    }));

    try {
      const res = await axios.post('/orders/', { orders });

      console.log(res.data);
    } catch (err) {
      console.log(err);
      // TODO: Proper handling
    }
  };

  return (
    <CartContext.Provider
      value={{
        loading: state.loading,
        products: state.products,
        productsToAdd: state.productsToAdd,
        subTotal: calculateSubTotal(state.products),
        isAddingToCart,
        isProductInCart,
        addCartProduct,
        removeCartProduct,
        decreaseQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
