import axios from "axios";
const URL = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Error while using add user Api: `, error);
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(`Error while using get user Api: `, error);
  }
};
export const createPost = async (newImage) => {
  try {
    return await axios.post(`${URL}/upload`, newImage);
  } catch (error) {
    console.log(`Error while using createPost Api: `, error);
  }
};
export const getPost = async () => {
  try {
    return await axios.get(`${URL}/getimage`);
  } catch (error) {
    console.log(`Error while using get image Api: `, error);
  }
};
