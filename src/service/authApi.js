import axios from "axios";

const API_URL = "http://localhost:8001/api/auth";

export const login = async (data) => {
  return axios.post(`${API_URL}/signin`, data);
};

export const register = (formData) => {
  return axios.post("http://localhost:8001/api/auth/signup", formData);
};

// DELETE USER
export const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
export const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};
