import { IProduct } from './product-interfaces';

export interface ICartProduct extends IProduct {
  count: number;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface ICart {
  products: ICartProduct[];
  loading: boolean;
  subTotal: number;
  productsToAdd: string[];
  isAddingToCart: (productId: string) => boolean;
  isProductInCart: (productId: string) => boolean;
  addCartProduct: (product: ICartProduct) => void;
  removeCartProduct: (productId: string | number) => void;
  decreaseQuantity: (productId: string | number) => void;
  checkout: (products: ICartProduct[]) => void;
}
