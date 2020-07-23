import React, { useContext } from 'react';

import ProductContext from '../../context/product/product-context';

import ProductItem from './ProductItem';

const ProductsHomePage = () => {
  const { productsHome } = useContext(ProductContext);

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
