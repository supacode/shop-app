import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import { initialState } from './authContext';
import authReducer from './authReducer';

const AuthState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (user: { email: string; password: string }) => {
    try {
      const res = await axios.post('/auth/login', { user });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedin: state.loggedin,
        loading: state.loading,
        user: state.user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
