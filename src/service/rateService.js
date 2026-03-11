import axios from "axios";

const API_URL = "http://localhost:8001/api/rates";

export const getRates = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteRate = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const createRate = async (data) => {
  return axios.post(API_URL, data);
};

export const updateRate = async (id, rate) => {
  return axios.put(`${API_URL}/${id}`, rate);
};