import axios from "axios";
import jwt_decode from "jwt-decode";
import instance from '../_helpers/axios'

const url = "http://localhost:8080/api/v1";

//
const findOneProfile = async () => {

  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token)
  const profileId = decoded.profileId
  console.log(profileId)

  const result = instance
    .get(url + "/profile/" + profileId)
    .then((res) => {

      console.log(res)

      if (res.status === 200) {
        return {
          type: "success",
          profile: res.data.data
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

//
const updateProfile = async (profileDetails) => {

  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token)
  const profileId = decoded.profileId
  console.log(profileId)
  const result = instance
    .put("/profile/" + profileId , profileDetails)
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

//
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
  findOneProfile,
  updateProfile,
  findAllProfile,
  deleteProfile
};
