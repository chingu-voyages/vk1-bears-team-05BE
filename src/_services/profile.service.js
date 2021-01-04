import axios from "axios";

const url = "http://localhost:8080/api/v1";

// profileid not yet located
const uploadProfile = async () => {
  const result = axios
    .put(url + "/profile/upload")
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
//need to add Request id 
const updateProfile = async () => {
  const result = axios
    .put(url + "/profile")
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

const findAllProfile = async () => {
  const result = axios
    .get(url + "/profile")
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

//need to add Request id 
const findOneProfile = async () => {
  const result = axios
    .get(url + "/profile")
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

//need to add Request id 
const deleteProfile = async () => {
  const result = axios

    .get(url + "Profiles")
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


export const ProfileService = { 
  uploadProfile,
  updateProfile,
  findAllProfile,
  findOneProfile,
  deleteProfile
};
