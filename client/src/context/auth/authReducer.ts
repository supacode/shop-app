import { IState, IAction } from '../../interfaces/auth-interfaces';
import { authTypes } from '../types';

const authReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case authTypes.START_LOGIN:
      state = { ...state, loginLoading: true };
      return state;

    case authTypes.LOAD_USER:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loginLoading: false,
        loggedIn: true,
      };

      localStorage.user = JSON.stringify(state.user);
      localStorage.token = JSON.stringify(state.token);

      return state;
    case authTypes.LOGIN_ERROR:
      state = {
        ...state,
        loginLoading: false,
        loginError: {
          message: action.payload,
        },
      };

      return state;
    default:
      return state;
  }
};

export default authReducer;
