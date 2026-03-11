import axios from "axios";

const API_URL = "http://localhost:8001/api/auth";

export const getAllUsers = () => {
  return axios.get(`${API_URL}/getAll`);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateUser = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};