import axios from "axios";

const API_URL = "http://localhost:8001/api/categories";

export const getCategories = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteCategory = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const createCategory = async (id) => {
  return axios.post(API_URL, id);
};

export const updateCategory = async (id, category) => {
  return axios.put(`${API_URL}/${id}`, category);
};
