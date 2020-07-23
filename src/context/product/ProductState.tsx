import React, { useState } from 'react';

import ProductContext, { Product } from './product-context';

const ProductState: React.FC = ({ children }) => {
  // eslint-disable-next-line
  const [homeProducts, setHomeProducts] = useState<Product[]>([]);

  // eslint-disable-next-line
  const [shopProducts, setShopProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider
      value={{
        homeProducts,
        shopProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
