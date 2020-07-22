import React, { Fragment } from 'react';
import ProductItem from '../products/ProductItem';

const ShopPage: React.FC = () => {
  return (
    <Fragment>
      <div className="banner">
        <h2 className="banner__heading">SHOP</h2>
      </div>

      <div className="shop">
        <div className="products">
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
