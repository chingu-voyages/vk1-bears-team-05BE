import { userConstants } from "../_constants";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {},
  isValid: false
};

export const auth = (state = initialState, action) => {
  switch (action.type) {

    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isValid: true,
      };
    case userConstants.USER_REGISTER_FAIL:  
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        errors: {},
        loading: false,
      };
    case userConstants.USER_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case userConstants.USER_LOGOUT:
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwtToken");

      return {
        isAuthenticated: false,
        user: {},
        loading: false,
        errors: {},
      };
    default:
      return state;
  }
};
