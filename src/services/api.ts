import axios from "axios";

const api = axios.create({
  baseURL: __DEV__ ? "http://localhost:3333" : "http://localhost:3333",
});

export default api;
