import React, { useContext, useEffect } from 'react';

import ProductContext from '../../context/product/productContext';

import ProductItem from './ProductItem';

const ProductsHomePage = () => {
  const { productsHome, getProductsHome } = useContext(ProductContext);

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
