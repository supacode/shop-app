// Product Interface
export interface IProduct {
  id: string | number;
  name: string;
  price: number;
  coverImage: string;
  description?: string;
  slug?: string;
}

// Action Interface
export interface IAction {
  payload: any;
  type: string;
}

// Product Store Interface
export interface IState {
  productsHome: IProduct[];
  productsShop: IProduct[];
  loading: boolean;
  product: null;
  getProductsHome: () => void;
  getProduct: (slug: string) => void;
}
