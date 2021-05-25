import axios from "axios";

const codes = [413, 401, 400, 403];

const validateStatus = (status: number) =>
  (status >= 200 && status < 300) || codes.includes(status);

export const api = axios.create({
  baseURL: "http://localhost:3000",
  validateStatus,
  withCredentials: true,
});
