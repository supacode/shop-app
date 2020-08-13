import React from 'react';
import { Link } from 'react-router-dom';

// import CartContext from '../../context/cart/cartContext';
import { IProduct } from '../../interfaces/product-interfaces';
import ProductCTA from './ProductCTA';

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="product">
      <figure>
        <img src={product.coverImage} alt="Product" />

        <Link to={`/products/${product.slug}`}>
          <figcaption>{product.name}</figcaption>
        </Link>
      </figure>
      <p className="product__price">
        <span className="product__price--normal">${product.price}</span>
      </p>

      <ProductCTA parentClass="product__cta" product={product} />
    </div>
  );
};

export default ProductItem;
