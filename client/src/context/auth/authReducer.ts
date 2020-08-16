import { IState, IAction } from '../../interfaces/auth-interfaces';
import { authTypes } from '../types';

const authReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case authTypes.START_LOGIN:
      state = { ...state, loginLoadiing: true };
      return state;

    case authTypes.LOAD_USER:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loginLoadiing: false,
        loggedin: true,
      };

      localStorage.user = JSON.stringify(state.user);
      localStorage.token = JSON.stringify(state.token);

      return state;
    case authTypes.LOGIN_ERROR:
      state = {
        ...state,
        loginLoadiing: false,
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
