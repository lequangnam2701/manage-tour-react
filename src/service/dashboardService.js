const API_URL = "http://localhost:8001/api/dashboard";

const getAuthHeader = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getDashboard = async () => {
  const res = await fetch(API_URL, {
    headers: {
      ...getAuthHeader(),
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
  return res.json();
};
