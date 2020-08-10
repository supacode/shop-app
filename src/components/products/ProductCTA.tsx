import React, { useContext } from 'react';

import Spinner from '../layout/Spinner';
import CartContext from '../../context/cart/cartContext';
import { IProduct } from '../../context/interfaces/product-interfaces';

const ProductCTA: React.FC<{ product: IProduct; parentClass: string }> = ({
  product,
  parentClass,
}) => {
  const {
    addCartProduct,
    isProductInCart,
    removeCartProduct,
    isAddingToCart,
  } = useContext(CartContext);

  return (
    <button
      className={parentClass}
      disabled={isAddingToCart(product.id)}
      onClick={() =>
        isProductInCart(product.id)
          ? removeCartProduct(product.id)
          : addCartProduct({
              count: 0,
              coverImage: product.coverImage,
              id: product.id,
              name: product.name,
              price: product.price,
              slug: product.slug,
            })
      }
    >
      {isAddingToCart(product.id) && (
        <Spinner strokeWidth={4} textColor="#fff" size={25} color="#fff" />
      )}

      <div className={`${parentClass}--inner`}>
        {!isAddingToCart(product.id) && (
          <svg width="32px" height="32px" viewBox="0 0 512 512">
            <circle
              cx="176"
              cy="416"
              r="16"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
            <polyline
              points="48 80 112 80 160 352 416 352"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
            <path
              d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
          </svg>
        )}

        {!isAddingToCart(product.id) && !isProductInCart(product.id) && (
          <span>Add to Cart</span>
        )}

        {!isAddingToCart(product.id) && isProductInCart(product.id) && (
          <span>Remove</span>
        )}
      </div>
    </button>
  );
};

export default ProductCTA;
