export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  user: string | null;
  token: string | null;
  loggedin: boolean;
  loading: boolean;
  loginLoadiing: boolean;
  loginError: { message: string } | null;
  login: (user: { email: string; password: string }) => void;
}
