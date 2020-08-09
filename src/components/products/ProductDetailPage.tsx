import React, { useContext, useEffect, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductContext from '../../context/product/productContext';
import Spinner from '../layout/Spinner';
import ProductCTA from './ProductCTA';

const ProductPage: React.FC = () => {
  const { getProduct, loadingOne, product } = useContext(ProductContext);

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
        {loadingOne && <Spinner text="Getting Product" />}
        {/*  */}
        {!loadingOne && product.id && (
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

              <ProductCTA parentClass="product-detail__cta" product={product} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
