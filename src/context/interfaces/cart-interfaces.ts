import { IProduct } from './product-interfaces';

export interface ICartProduct {
  name: string;
  id: string | number;
  count: number;
  slug: string;
  coverImage: string;
  price: number;
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

export interface ICartItem extends IProduct {
  count: number;
  slug: string;
}

export interface IState {
  products: ICartProduct[];
  loading: boolean;
  addCartProduct: (productId: string | number, slug: string) => void;
  removeCartItem: (productId: string | number) => void;
  decreaseQuantity: (productId: string | number) => void;
}
