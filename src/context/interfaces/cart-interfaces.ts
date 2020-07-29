import { IProduct } from './product-interfaces';

export interface ICartProduct extends IProduct {
  count: number;
}

export interface ICart {
  products: ICartProduct[];
  addCartProduct(): void;
  removeProduct(): void;
  clearCart(): void;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  products: ICartProduct[];
  loading: boolean;
  productInCart: (productId: string) => Boolean;
  addCartProduct: (product: ICartProduct) => void;
  removeCartItem: (productId: string | number) => void;
  decreaseQuantity: (productId: string | number) => void;
}
