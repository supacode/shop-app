export interface IUser {
  name?: string;
  id: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  user: IUser | null;
  loggedin: boolean;
  loading: boolean;
  login: (user: { email: string; password: string }) => void;
}
