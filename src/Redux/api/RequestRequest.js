import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
export const sendRequest = (data) => API.post("/request/", data);
export const getAllRequests = () => API.get("/request/");
export const getRequest = (requestId) => API.get(`/request/${requestId}`);
export const archiveRequest = (requestId) => API.put(`/request/archive/${requestId}`);
