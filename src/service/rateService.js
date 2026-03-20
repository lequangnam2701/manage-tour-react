const API_URL = "http://localhost:8001/api/rates";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const request = async (url, options = {}) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  try {
    return await res.json();
  } catch {
    return null; 
  }
};

export const getRates = () => {
  return request(API_URL, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const deleteRate = (id) => {
  return request(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const createRate = (data) => {
  return request(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(data),
  });
};

export const updateRate = (id, rate) => {
  return request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(rate),
  });
};