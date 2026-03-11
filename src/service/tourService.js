import axios from "axios";

const API_URL = "http://localhost:8001/api/tours";

export const getTours = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteTour = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const createTour = async (data) => {
  return axios.post("http://localhost:8001/api/tours", data);
};

export const updateTour = async (id, tour) => {
  return axios.put(`${API_URL}/${id}`, tour);
};

export const getTourById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res;
};

export const searchTours = (query) => {
  return axios.get(`${API_URL}/search?query=${query}`);
};

export const getAllCategories = async () => {
  return axios.get("http://localhost:8001/api/categories");
};
