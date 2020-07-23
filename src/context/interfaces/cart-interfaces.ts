export interface ICartProduct {
  id: string;
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
  addCartProduct?: (productId: string | number) => void;
}
