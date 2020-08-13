import { IState, IAction } from '../../interfaces/auth-interfaces';

const authReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
