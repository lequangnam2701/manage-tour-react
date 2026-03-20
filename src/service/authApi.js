const API_URL = "http://localhost:8001/api/auth";

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

  try {
    return await res.json();
  } catch {
    return null;
  }
};

export const login = (data) => {
  return request(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const register = (formData) => {
  return request(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const deleteUser = (id) => {
  return request(`http://localhost:8001/api/users/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const getUserById = (id) => {
  return request(`${API_URL}/${id}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const updateUser = (id, user) => {
  return request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(user),
  });
};
