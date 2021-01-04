import axios from "axios" ;

const url = "http://localhost:8080/api/v1";

//local storage not yet working 

const login = async (details) => {
  const result = axios
    .post(url + "/auth/login", details)
    .then((res) => {

      console.log(res)

      // Save to localStorage
      // Set token to localStorage

      const { token } = res.data.data;

      if (res.status === 200) {
        return {
          type: "loginSuccess",
          token,
        };
      }
    })
    .catch((err) => {

      if (err.response.status === 406) {
        return {
          type: "Invalid" 
        }
      }else if (err.response.status === 426) {
        return {
          type: "notActivated" 
        }
      }else if (err.response.status === 401) {
        return {
          type: "loginError",
        };
      }
    });

  return result;
};

const register = async (details) => {
  const result = axios
    .post(url + "/auth/register", details)
    .then((res) => {

      console.log(res)

     if (res.status === 201) {
        return {
          type: "registerSuccessful" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 500) {
        return {
          type: "registeFailed"
        };
      } else if (err.response.status === 409) {
        return {
          type: "emailExists" 
        }
      } else if (err.response.status === 417) {
        return {
          type: "invalidPassword" 
        }
      }
    });

  return result;
};

const activation = async (key) => {
  const result = axios
    .post(url + "/auth/register" + key)
    .then((res) => {

      
      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};

const findAllUser = async () => {
  const result = axios

    .get(url + "/auth/users")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 500) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};

// need user id and token
const findOneUser = async () => {
  const result = axios

    .get(url + "/auth/users" ,)
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};
// need user id and token
const updateUser = async () => {
  const result = axios

    .put(url + "/auth/users")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};
// need user id and token
const deleteUser = async () => {
  const result = axios
    .delete(url + "/auth/users")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};


export const userService = {
  login,
  register,
  activation,
  findAllUser,
  findOneUser,
  updateUser,
  deleteUser
};
