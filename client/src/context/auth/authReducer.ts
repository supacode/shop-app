import { IState, IAction } from '../../interfaces/auth-interfaces';
import { authTypes } from '../types';

const authReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case authTypes.START_LOGIN:
      state = { ...state, loginLoadiing: true };
      return state;

    case authTypes.LOAD_USER:
      localStorage.user = JSON.stringify(action.payload.user.id);
      localStorage.token = JSON.stringify(action.payload.token);

      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loginLoadiing: false,
        loggedin: true,
      };

      console.log(state.user);
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
