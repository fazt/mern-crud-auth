import axios from "axios";
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL || "http://localhost:4000",
  timeout: 1000,
});

export default instance;
