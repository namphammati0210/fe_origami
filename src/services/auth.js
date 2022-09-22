import axios from "axios";

export const login = async (payload) =>
  await axios.post("http://localhost:3001/api/auth/login", payload);
