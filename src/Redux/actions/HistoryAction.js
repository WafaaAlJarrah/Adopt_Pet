import * as HistoryApi from "../api/HistoryRequest";

//get histories
export const getAllHistories = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_HISTORIES_START" });
  try {
    const { data } = await HistoryApi.getAllHistories();
    dispatch({ type: "RETREIVING_HISTORIES_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_HISTORIES_FAIL" });
  }
};
