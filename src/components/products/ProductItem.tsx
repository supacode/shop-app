import React from 'react';

import { Link } from 'react-router-dom';

import { IProduct } from '../../context/product/interfaces';

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="product">
      <figure>
        <img
          src={require(`../../assets/img/products/${product.coverImage}`)}
          alt="Product"
        />

        <Link to="/products/123">
          <figcaption>{product.name}</figcaption>
        </Link>
      </figure>
      <p className="product__price">
        <span className="product__price--normal">${product.price}</span>
      </p>
      <button className="product__add-cart">
        <svg width="32px" height="32px" viewBox="0 0 512 512">
          <circle
            cx="176"
            cy="416"
            r="16"
            style={{
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px'
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
              strokeWidth: '32px'
            }}
          />
          <polyline
            points="48 80 112 80 160 352 416 352"
            style={{
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px'
            }}
          />
          <path
            d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
            style={{
              fill: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px'
            }}
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductItem;
