const HistoryReducer = (
  state = {
    histories: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    //all histories.js
    case "RETREIVING_HISTORIES_START":
      console.log("retreiving start ");
      return { ...state, loading: true, error: false };

    case "RETREIVING_HISTORIES_SUCCESS":
      console.log("retreiving data ", action.data);
      return {
        ...state,
        histories: action.data,
        loading: false,
        error: false,
      };

    case "RETREIVING_HISTORIES_FAIL":
      return { ...state, loading: false, error: true };
    //accept or reject request button
    case "UPLOAD_HISTORY_START":
      return { ...state, uploading: true, error: false };

    case "UPLOAD_HISTORY_SUCCESS":
      console.log("new histrory ", action.data);
      return {
        ...state,
        histories: [...state.histories, action.data],
        uploading: false,
        error: false,
      };

    case "UPLOAD_HISTORY_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
