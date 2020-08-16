import { createContext } from 'react';

import { IState } from '../../interfaces/auth-interfaces';

export const initialState: IState = {
  loggedin: false,
  user: null,
  token: null,
  loading: true,
  loginLoadiing: false,
  loginError: null,
  login: () => {},
};

const AuthContext = createContext<IState>(initialState);

export default AuthContext;
