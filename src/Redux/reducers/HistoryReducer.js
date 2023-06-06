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
