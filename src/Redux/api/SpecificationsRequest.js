import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
export const getSpecifications = (animalType) => API.get(`/specification/${animalType}`);
