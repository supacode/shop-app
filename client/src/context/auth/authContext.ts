import { createContext } from 'react';

import { IState } from '../../interfaces/auth-interfaces';

export const initialState: IState = {
  loggedin: false,
  user: null,
  loading: true,
  login: () => {},
};

const AuthContext = createContext<IState>(initialState);

export default AuthContext;
