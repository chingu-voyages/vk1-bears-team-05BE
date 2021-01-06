import axios from "axios";
import instance from '../_helpers/axios';
import jwt_decode from "jwt-decode";

//RequestPostid not yet located

const url = "http://localhost:8080/api/v1";

const addRequestPost = async (details) => {

  const result = instance
    .post(url + "/requestPost", details)
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
const uploadRequestPost = async () => {
  const result = axios
    .put(url + "/requestPosts/upload")
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
const updateRequestPost = async () => {
  const result = axios
    .put(url + "/requestPosts")
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

const findAllRequestPost = async () => {
  const result = axios
    .get(url + "/requestPost")
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
const findOneRequestPost = async () => {
  const result = axios
    .get(url + "/requestPosts")
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
const deleteRequestPost = async () => {
  const result = axios
    .get(url + "/requestPosts")
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







export const RequestPostService = {
  addRequestPost,
  uploadRequestPost,
  updateRequestPost,
  findAllRequestPost,
  findOneRequestPost,
  deleteRequestPost
};
