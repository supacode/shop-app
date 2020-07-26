import React, { useContext, useEffect } from 'react';

import ProductContext from '../../context/product/productContext';
import ProductItem from './ProductItem';
import { IState } from '../../context/interfaces/product-interfaces';

const ProductsHomePage: React.FC = () => {
  const { productsHome, getProductsHome } = useContext<IState>(ProductContext);

  useEffect(() => {
    getProductsHome();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="products">
      <div className="row">
        {productsHome.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsHomePage;
