import { API_URL } from "../config";
import axios from "axios";

export const registerRequest = async (user) =>
  await axios.post(`${API_URL}/register`, user);

export const loginRequest = async (user) =>
  await axios.post(`${API_URL}/login`, user);

export const verifyToken = async (token) =>
  await axios.get(`${API_URL}/verify`, {
    headers: {
      Authorization: token,
    },
  });
