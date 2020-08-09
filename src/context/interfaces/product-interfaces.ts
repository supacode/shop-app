// Product Interface
export interface IProduct {
  id: string;
  name: string;
  price: number;
  coverImage: string;
  description?: string;
  slug: string;
  images?: [];
}

// Action Interface
export interface IAction {
  payload?: any;
  type: string;
}

// Product Store Interface
export interface IState {
  productsHome: IProduct[];
  productsShop: IProduct[];
  loadingOne: boolean;
  loadingHome: boolean;
  loadingShop: boolean;
  product: IProduct;
  getProductsHome: () => void;
  getProductsShop: () => void;
  getProduct: (slug: string) => void;
  loadingProduct?: () => void;
}
