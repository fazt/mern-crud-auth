import { API_URL } from "../config";
import axios from "axios";

export const registerRequest = async (user) =>
  await axios.post(`${API_URL}/auth/register`, user);

export const loginRequest = async (user) =>
  await axios.post(`${API_URL}/auth/login`, user);

export const verifyToken = async (token) =>
  await axios.get(`${API_URL}/auth/verify`, {
    headers: {
      Authorization: token,
    },
  });
