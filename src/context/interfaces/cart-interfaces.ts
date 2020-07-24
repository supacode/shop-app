import { IProduct } from './product-interfaces';

export interface ICartProduct {
  id: string | number;
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
  payload: any;
}

export interface IState {
  products: ICartProduct[];
  addCartProduct: (productId: string | number) => void;
  removeCartItem: (productId: string | number) => void;
}

export interface ICartItem extends IProduct {
  count: number;
}
