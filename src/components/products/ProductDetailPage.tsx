import React, { useContext, useEffect, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';
import Spinner from '../layout/Spinner';
import CartContext from '../../context/cart/cartContext';

const ProductPage: React.FC = () => {
  const { getProduct, loading, product } = useContext(ProductContext);
  const { isProductInCart, addCartProduct, removeCartProduct } = useContext(
    CartContext,
  );

  const slug = useParams<{ slug: string }>().slug;

  const [productCoverImage, setProductCoverImage] = useState('');

  const changeDisplayPicture = (image: string): void => {
    setProductCoverImage(image);
  };

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
              <div className="product-detail__preview--image">
                <img
                  alt={product.name}
                  src={
                    productCoverImage
                      ? `http://localhost:5000/images/products/${productCoverImage}`
                      : `http://localhost:5000/images/products/${product.coverImage}`
                  }
                />
              </div>

              <div className="product-detail__preview--thumbnails">
                {product.images?.map((image) => (
                  <div
                    className="product-detail__preview--thumb"
                    key={image}
                    onClick={() => changeDisplayPicture(image)}
                    style={{
                      backgroundImage: `url(http://localhost:5000/images/products/${image})`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="product-detail__content">
              <div>
                <h1 className="product-detail__content--title">
                  {product.name}
                </h1>
                <p className="product-detail__price">${product.price}</p>
              </div>
              <p className="product-detail__content--description">
                {product.description}
              </p>

              {isProductInCart(product.id) ? (
                <button
                  className="product-detail__cta"
                  onClick={() => removeCartProduct(product.id)}
                >
                  Remove Product
                </button>
              ) : (
                <button
                  onClick={() =>
                    addCartProduct({
                      count: 0,
                      coverImage: product.coverImage,
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      slug: product.slug,
                    })
                  }
                  className="product-detail__cta"
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
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
