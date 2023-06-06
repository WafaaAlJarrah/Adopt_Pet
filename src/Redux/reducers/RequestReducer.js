const RequestReducer = (
  state = {
    requests: [],
    request: {},
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

    // get requests --> AllRequests.js
    case "RETREIVING_REQUESTS_START":
      console.log("retreiving start ");
      return { ...state, loading: true, error: false };

    case "RETREIVING_REQUESTS_SUCCESS":
      console.log("retreiving data ", action.data);
      return {
        ...state,
        requests: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_REQUESTS_FAIL":
      return { ...state, loading: false, error: true };

    // get request
    case "RETREIVING_ONE_REQUEST_START":
      console.log("retreiving start ");
      return { ...state, loading: true, error: false };

    case "RETREIVING_ONE_REQUEST_SUCCESS":
      console.log("retreiving data ", action.data);
      return {
        ...state,
        request: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_ONE_REQUEST_FAIL":
      return { loading: false, error: true };

    // archive a request (accepted or rejected) --> acceptRequestButton.js && rejectRequestButton.js
    case "ARCHIVE_REQUEST_START":
      console.log("archiving start ");
      return { ...state, loading: true, error: false };

    case "ARCHIVE_REQUEST_SUCCESS":
      console.log("archived request: ", action.data);
      return {
        ...state,
        loading: false,
        error: false,
      };

    case "ARCHIVE_REQUEST_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default RequestReducer;
