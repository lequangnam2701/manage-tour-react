
import axios from "axios";

const API_URL = "http://localhost:8001/api";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getBooks = () => {
  return axios.get(`${API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const getBookDetail = (id) => {
  return axios.get(`${API_URL}/bookDetail/book/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const confirmBook = (id) => {
  return axios.get(`${API_URL}/books/confirm/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const cancelBook = (id) => {
  return axios.get(`${API_URL}/books/cancel/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const thanksBook = (id) => {
  return axios.get(`${API_URL}/books/thanks/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/books/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
};