import { createContext } from 'react';

import { IState, IUser } from '../../interfaces/auth-interfaces';

let loadedUser = localStorage.getItem('user');
let loadedToken = localStorage.getItem('token');

let user: IUser = { id: '', name: '' };

if (loadedUser) user = JSON.parse(loadedUser);

if (loadedToken) loadedToken = JSON.parse(loadedToken);

export const initialState: IState = {
  loggedIn: false,
  user: { ...user } || null,
  token: loadedToken || null,
  loginLoading: false,
  loginError: null,
  login: () => {},
};

const AuthContext = createContext<IState>(initialState);

export default AuthContext;
