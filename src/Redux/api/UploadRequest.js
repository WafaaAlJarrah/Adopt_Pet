import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadSpecification = (data) => API.post("/specification/", data);
export const uploadAnimal = (data) => API.post("/animal/", data);
