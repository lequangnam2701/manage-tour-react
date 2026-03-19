const API_URL = "http://localhost:8001/api/statistical";

const getAuthHeader = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  return token ? { Authorization: `Bearer ${token}` } : {};
};

const request = async (url, options = {}) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
};

export const getCategorySeller = () => {
  return request(`${API_URL}/get-category-seller`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const getRevenueByMonth = (year) => {
  return request(`${API_URL}/${year}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const getRevenueYears = () => {
  return request(`${API_URL}/revenue-years`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};