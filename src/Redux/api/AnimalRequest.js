import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
export const getAnimals = (specificationId) => API.get(`/animal/specification/${specificationId}`); 
export const getAnimal = (animalId) => API.get(`/animal/animalDetails/${animalId}`); 
export const updateAnimal = (animalId, data) => API.put(`/animal/updateAnimal/${animalId}`, data); 
export const likeAnimal = (animalID, userId) => API.put(`/animal/${animalID}/like`,{userId: userId}); 
export const deleteAnimal = (animalID) => API.delete(`/animal/delete/${animalID}`); 
export const archiveAnimal = (animalID) => API.put(`/animal/archive/${animalID}`); 

