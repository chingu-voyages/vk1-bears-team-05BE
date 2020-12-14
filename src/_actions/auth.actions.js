import { authConstants } from "../_constants";
import { authService } from "../_services";
import jwt_decode from "jwt-decode";

const loginAction = (details) => {
  return (dispatch) => {
    authService.login(details).then((res) => {
      if (res.type === "success") {
        localStorage.setItem("jwtToken", res.token);
        const decoded = jwt_decode(res.token);

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          user: decoded,
        });

        localStorage.setItem("isLoggedIn", true);
      } else {
        dispatch({
          type: authConstants.SET_ERRORS,
          errors: {
            type: "warning",
            message: "Email or password is incorrect!",
          },
        });
      }
    });
  };
};

export const authActions = {
  loginAction,
};
