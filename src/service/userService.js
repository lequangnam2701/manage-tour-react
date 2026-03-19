const API_URL = "http://localhost:8001/api/auth";

// Lấy token nếu có
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// GET ALL USERS
export const getAllUsers = async () => {
  const res = await fetch(`${API_URL}/getAll`, {
    headers: {
      ...getAuthHeader(),
    },
  });

  return res.json();
};

// DELETE USER
export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });

  return res.text(); // thường delete trả message
};

// GET USER BY ID
export const getUserById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    headers: {
      ...getAuthHeader(),
    },
  });

  return res.json();
};

// UPDATE USER
export const updateUser = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
