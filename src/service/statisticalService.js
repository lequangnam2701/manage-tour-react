import axios from "axios";

const API_URL = "http://localhost:8001/api/statistical";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const getCategorySeller = async () => {
  return axios.get(API_URL + "/get-category-seller", getAuthHeader());
};

export const getRevenueByMonth = async (year) => {
  return axios.get(API_URL + "/" + year, getAuthHeader());
};

export const getRevenueYears = async () => {
  return axios.get(API_URL + "/revenue-years", getAuthHeader());
};
