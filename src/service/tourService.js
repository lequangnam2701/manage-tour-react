const API_URL = "http://localhost:8001/api/tours";

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

export const getTours = () => {
  return request(API_URL, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const deleteTour = (id) => {
  return request(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const createTour = (data) => {
  return request(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(data),
  });
};

export const updateTour = (id, tour) => {
  return request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(tour),
  });
};

export const getTourById = (id) => {
  return request(`${API_URL}/${id}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const searchTours = (query) => {
  return request(`${API_URL}/search?query=${encodeURIComponent(query)}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const getAllCategories = () => {
  return request("http://localhost:8001/api/categories", {
    headers: {
      ...getAuthHeader(),
    },
  });
};