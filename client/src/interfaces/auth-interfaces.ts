export interface IUser {
  id: string;
  name?: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  user: IUser | null;
  token: string | null;
  loggedIn: boolean;
  loginLoading: boolean;
  loginError: { message: string } | null;
  login: (user: { email: string; password: string }) => void;
}
