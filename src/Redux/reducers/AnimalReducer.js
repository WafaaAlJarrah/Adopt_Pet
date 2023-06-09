const AnimalReducer = (
  state = {
    animals: [],
    animal: {},
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    //newAnimal.js
    case "UPLOAD_ANIMAL_START":
      return { ...state, uploading: true, error: false };

    case "UPLOAD_ANIMAL_SUCCESS":
      return {
        ...state,
        animals: [...state.animals, action.data],
        uploading: false,
        error: false,
      };

    case "UPLOAD_ANIMAL_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };

    // get animals by specification --> AllAnimals.js
    case "RETREIVING_Animals_START":
      console.log("retreiving start ");
      return { ...state, loading: true, error: false };

    case "RETREIVING_ANIMALS_SUCCESS":
      console.log("retreiving data ", action.data);
      return {
        ...state,
        animals: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_ANIMALS_FAIL":
      return { ...state, loading: false, error: true };

    // get one animal --> updateAnimal.js
    case "RETREIVING_ONE_ANIMAL_START":
      console.log("retreivng start ");
      return { ...state, loading: true, error: false };

    case "RETREIVING_ONE_ANIMAL_SUCCESS":
      console.log("animal data to update it", action.data);
      return {
        ...state,
        animal: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_ONE_ANIMAL_FAIL":
      return { loading: false, error: true };

      // update an animal --> updateAnimal.js
    case "UPDATE_ANIMAL_START":
      console.log("retreivng start ");
      return { ...state, loading: true, error: false };

    case "UPDATE_ANIMAL_SUCCESS":
      console.log("updated data ", action.data);
      return {
        ...state,
        animal: action.data,
        loading: false,
        error: false,
      };

    case "UPDATE_ANIMAL_FAIL":
      return { loading: false, error: true };
    // delete an animal --> deleteButton.js
    case "DELETE_ANIMAL_START":
      console.log("deleting start ");
      return { ...state, loading: true, error: false };

    case "DELETE_ANIMAL_SUCCESS":
      console.log("animalId deleted: ", action.data);
      return {
        ...state,
        // animals: action.data,
        loading: false,
        error: false,
      };

    case "DELETE_ANIMAL_FAIL":
      return { ...state, loading: false, error: true };

    // archive an animal --> deleteButton.js
    case "ARCHIVE_START":
      console.log("deleting start ");
      return { ...state, loading: true, error: false };

    case "ARCHIVE_SUCCESS":
      console.log("animalId deleted: ", action.data);
      return {
        ...state,
        // animals: action.data,
        loading: false,
        error: false,
      };

    case "ARCHIVE_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default AnimalReducer;
