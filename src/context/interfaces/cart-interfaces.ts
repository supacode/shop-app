export interface ICartProduct {
  id: string;
}

export interface ICart {
  products: ICartProduct[];
  addProduct(): void;
  removeProduct(): void;
  clearCart(): void;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  products: ICartProduct[];
}
