import React, { Fragment, useContext, useEffect } from 'react';

import ProductContext from '../../context/product/productContext';
import ProductItem from '../products/ProductItem';
import Spinner from '../layout/Spinner';

const ShopPage: React.FC = () => {
  const { getProductsShop, productsShop, loadingShop } = useContext(
    ProductContext,
  );

  useEffect(() => {
    getProductsShop();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="banner">
        <h2 className="banner__heading">SHOP</h2>
      </div>

      <div className="shop">
        <div className="products">
          <div className="row">
            {loadingShop && <Spinner text="Getting Products" />}

            {productsShop.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
