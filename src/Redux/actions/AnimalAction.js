import * as AnimalApi from "../api/AnimalRequest";

//get animal by specification
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

//delete an animal
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