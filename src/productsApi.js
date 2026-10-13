const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://web-dev-course-1.onrender.com";

export async function productsRequest(path, options = {}) {
  const headers = { ...options.headers };
  const token = localStorage.getItem("token");

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  if (options.body && !(options.body instanceof FormData) && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json"; 
    
  }

  const response = await fetch(`${API_BASE_URL}/products${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "The product request could not be completed.");
  }

  return data;
}
