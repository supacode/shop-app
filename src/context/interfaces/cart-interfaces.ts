import { IProduct } from './product-interfaces';

export interface ICartProduct {
  id: string | number;
  count: number;
  slug: string;
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
  cartProducts: ICartProduct[];
  loadedProducts: ICartItem[];
  loading: boolean;
  loadProducts?: () => void;
  addCartProduct: (productId: string | number, slug: string) => void;
  removeCartItem: (productId: string | number) => void;
  decreaseQuantity: (productId: string | number) => void;
}
