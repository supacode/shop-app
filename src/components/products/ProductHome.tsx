import React, { useContext, useEffect } from 'react';

import ProductContext from '../../context/product/productContext';
import ProductItem from './ProductItem';
import { IState } from '../../context/interfaces/product-interfaces';
import Spinner from '../layout/Spinner';

const ProductsHomePage: React.FC = () => {
  const { productsHome, getProductsHome, loadingHome } = useContext<IState>(
    ProductContext,
  );

  useEffect(() => {
    getProductsHome();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="products">
      <div className="row">
        {loadingHome && <Spinner size={60} text="Getting Products" />}
        {productsHome.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsHomePage;
