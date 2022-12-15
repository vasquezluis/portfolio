import axios from "axios";

// instantiate axios
const worksAPI = axios.create({
  baseURL: "http://localhost:4000/api/v1/works",
});

export const getWorks = async () => {
  const response = await worksAPI.get("/");
  return response.data;
};
