import React, { useContext, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';
import Spinner from '../layout/Spinner';
import CartContext from '../../context/cart/cartContext';

const ProductPage: React.FC = () => {
  const { getProduct, loading, product } = useContext(ProductContext);
  const { addCartProduct } = useContext(CartContext);

  const slug = useParams<{ slug: string }>().slug;

  useEffect(() => {
    getProduct(slug);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="product-detail">
      <div className="row">
        {/*  Display spinner if product is loading*/}
        {loading && <Spinner text="Loading Product" />}
        {/*  */}
        {!loading && product.id && (
          <Fragment>
            <div className="product-detail__preview">
              <div className="product-detail__preview--thumbnails">
                {product.images?.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/images/products/${image}`}
                    alt={`${index} ${product.name}`}
                  />
                ))}
              </div>
              <div className="product-detail__preview--image">
                <img
                  alt={product.name}
                  src={`http://localhost:5000/images/products/${product.coverImage}`}
                />
              </div>
            </div>
            <div className="product-detail__content">
              <h1 className="product-detail__content--title">{product.name}</h1>
              <p className="product-detail__price">{product.price}</p>
              <p className="product-detail__content--description">
                {product.description}
              </p>

              <button
                onClick={() => addCartProduct(product.id, product.slug)}
                className="product-detail__add-to-cart"
              >
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

                <span>Add to Cart</span>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
