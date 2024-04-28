// reducers.js
import { LOGIN, LOGOUT, SET_USER } from '../actions/index';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
