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
