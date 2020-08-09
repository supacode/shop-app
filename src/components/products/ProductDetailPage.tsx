import React, { useContext, useEffect, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';
import Spinner from '../layout/Spinner';
import CartContext from '../../context/cart/cartContext';

const ProductPage: React.FC = () => {
  const { getProduct, loading, product } = useContext(ProductContext);
  const {
    loading: addingProduct,
    isProductInCart,
    addCartProduct,
    removeCartProduct,
  } = useContext(CartContext);

  const slug = useParams<{ slug: string }>().slug;

  const [productCoverImage, setProductCoverImage] = useState('');

  const changeDisplayPicture = (image: string) => {
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
                    productCoverImage ? productCoverImage : product.coverImage
                  }
                />
              </div>

              <div className="product-detail__preview--thumbnails">
                {product.images?.map((image) => (
                  <button
                    key={image}
                    onClick={() => changeDisplayPicture(image)}
                  >
                    <div
                      className={
                        productCoverImage === image
                          ? 'product-detail__preview--thumb product-detail__preview--active'
                          : 'product-detail__preview--thumb'
                      }
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    ></div>
                  </button>
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
              <button
                className="product-detail__cta"
                disabled={addingProduct}
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
                {/* Display spinner while adding product */}
                {addingProduct && (
                  <Spinner
                    strokeWidth={4}
                    textColor="#fff"
                    size={25}
                    color="#fff"
                  />
                )}

                {/* Add product to text icon and text */}
                {!addingProduct && !isProductInCart(product.id) && (
                  <Fragment>
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
                  </Fragment>
                )}

                {/* Remove from cart icon and text */}
                {!addingProduct && isProductInCart(product.id) && (
                  <span>Remove Product</span>
                )}
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
