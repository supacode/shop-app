import { createContext } from 'react';

export interface Product {
  name: string;
  price: number;
}

interface Context {
  homeProducts: Product[];
  shopProducts: Product[];
}

const ProductContext = createContext<Context>({
  homeProducts: [],
  shopProducts: []
});

export default ProductContext;
