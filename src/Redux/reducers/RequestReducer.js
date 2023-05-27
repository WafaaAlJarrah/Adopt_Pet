const RequestReducer = (
  state = {
    requests: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    //adoptButton.js
    case "SEND_REQUEST_START":
      return { ...state, uploading: true, error: false };

    case "SEND_REQUEST_SUCCESS":
      console.log("uploading data ", action.data);
      return {
        ...state,
        requests: [...state.requests, action.data],
        uploading: false,
        error: false,
      };

    case "SEND_REQUEST_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default RequestReducer;
