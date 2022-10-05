import axios from "./axios";

export const registerRequest = async (user) =>
  await axios.post(`/auth/register`, user);

export const loginRequest = async (user) =>
  await axios.post(`/auth/login`, user);

export const verifyToken = async (token) =>
  await axios.get(`/auth/verify`, {
    headers: {
      Authorization: token,
    },
  });
