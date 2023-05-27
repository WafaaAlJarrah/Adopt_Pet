const SpecificationReducer = (
  state = {
    specifications: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    //newSpec.js
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };

    case "UPLOAD_SUCCESS":
      console.log("uploading data ", action.data);
      return {
        ...state,
        specifications: [...state.specifications, action.data],
        uploading: false,
        error: false,
      };

    case "UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };
    // catsModal.js or dogsModal.js 
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };

    case "RETREIVING_SUCCESS":
      console.log("retreiving data ", action.data);
      return {
        ...state,
        specifications: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default SpecificationReducer;
