const API_URL = "http://localhost:8001/api/categories";

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

export const getCategories = () => {
  return request(API_URL, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const deleteCategory = (id) => {
  return request(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const createCategory = (data) => {
  return request(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(data),
  });
};

export const updateCategory = (id, category) => {
  return request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(category),
  });
};
