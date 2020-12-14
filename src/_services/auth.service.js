import axios from "axios";

const url = "http://localhost:8080/api/v1";

const login = async (details) => {
  const result = axios
    .post(url + "/auth/login", details)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data.data;

      if (res.status === 200) {
        return {
          type: "success",
          token,
        };
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        return {
          type: "error",
          message: "login failed",
        };
      }
    });

  return result;
};

export const authService = {
  login,
};
