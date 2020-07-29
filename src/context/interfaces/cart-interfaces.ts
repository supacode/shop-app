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
  isProductInCart: (productId: string) => Boolean;
  addCartProduct: (product: ICartProduct) => void;
  removeCartItem: (productId: string | number) => void;
  decreaseQuantity: (productId: string | number) => void;
}
