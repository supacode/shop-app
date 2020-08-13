import { createContext } from 'react';

import { IState } from '../../interfaces/auth-interfaces';

let token = localStorage.getItem('token');
let user = localStorage.getItem('user');

if (token) token = JSON.parse(token);
if (user) user = JSON.parse(user);

export const initialState: IState = {
  loggedin: false,
  user: user || null,
  token: token || null,
  loading: true,
  loginLoadiing: false,
  loginError: null,
  login: () => {},
};

const AuthContext = createContext<IState>(initialState);

export default AuthContext;
