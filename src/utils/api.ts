import axios from "axios";

// Buat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
