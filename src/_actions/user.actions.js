import { userConstants } from "../_constants";
import { userService } from "../_services";
import jwt_decode from "jwt-decode";

const loginAction = (details) => {
  return (dispatch) => {
    userService.login(details).then((res) => {

      console.log(res)

      if (res.type === "loginSuccess") {
        localStorage.setItem("jwtToken", res.token);
        const decoded = jwt_decode(res.token);

        dispatch({
          type: userConstants.USER_LOGIN_SUCCESS,
          user: decoded,
        });

        localStorage.setItem("isLoggedIn", true);
      }
      else if (res.type === "Invalid") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "You're not registered.",
          }
        });
      }else if (res.type === "notActivated") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "not yet activated",
          }
        });
      }else {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "password is incorrect",
          },
        });
      }
    });
  };
};

const registerAction = (details) => {
  return (dispatch) => {
    
    userService.register(details).then((res) => {

      console.log(details)

      if (res.type === "registerSuccessful") {
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
        });
      }
      else if (res.type === "emailExists") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "Mail exists",
          }
        });
      } else if (res.type === "invalidPassword") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "password is required",
          }
        });
      }else {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "Register failed",
          }
        })
      }
    })
  }
}

export const userActions = {
  loginAction,
  registerAction,
};
