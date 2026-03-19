const API_URL = "http://localhost:8001/api";

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

export const getBooks = () => {
  return request(`${API_URL}/books`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const getBookDetail = (id) => {
  return request(`${API_URL}/bookDetail/book/${id}`, {
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const confirmBook = (id) => {
  return request(`${API_URL}/books/confirm/${id}`, {
    method: "PUT", 
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const cancelBook = (id) => {
  return request(`${API_URL}/books/cancel/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const thanksBook = (id) => {
  return request(`${API_URL}/books/thanks/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeader(),
    },
  });
};

export const deleteBook = (id) => {
  return request(`${API_URL}/books/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};
