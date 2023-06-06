import * as AnimalApi from "../api/AnimalRequest";

//get animals by specification
export const getAnimals = (specificationId) => async (dispatch) => {
  dispatch({ type: "RETREIVING_ANIMALS_START" });
  try {
    const { data } = await AnimalApi.getAnimals(specificationId);
    dispatch({ type: "RETREIVING_ANIMALS_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_ANIMALS_FAIL" });
  }
};

//get one animal
export const getAnimal = (animalId) => async (dispatch) => {
  dispatch({ type: "RETREIVING_ONE_ANIMAL_START" });
  try {
    const { data } = await AnimalApi.getAnimal(animalId);
    dispatch({ type: "RETREIVING_ONE_ANIMAL_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_ONE_ANIMAL_FAIL" });
  }
};
//update one animal
export const updateAnimal = (animalId, updatedAnimal) => async (dispatch) => {
  dispatch({ type: "UPDATE_ANIMAL_START" });
  try {
    const { data } = await AnimalApi.updateAnimal(animalId, updatedAnimal);
    dispatch({ type: "UPDATE_ANIMAL_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_ANIMAL_FAIL" });
  }
};

//delete an animal
export const deleteAnimal = (animalId) => async (dispatch) => {
  dispatch({ type: "DELETE_ANIMAL_START" });
  try {
    await AnimalApi.deleteAnimal(animalId);
    dispatch({ type: "DELETE_ANIMAL_SUCCESS", animalId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "DELETE_ANIMAL_FAIL" });
  }
};

//archive an animal
export const archiveAnimal = (animalId) => async (dispatch) => {
  dispatch({ type: "ARCHIVE_START" });
  try {
    await AnimalApi.archiveAnimal(animalId);
    dispatch({ type: "ARCHIVE_SUCCESS", animalId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ARCHIVE_FAIL" });
  }
};
