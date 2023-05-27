import * as RequestApi from "../api/RequestRequest";

//send request
export const sendRequest = (data) => async (dispatch) => {
  dispatch({ type: "SEND_REQUEST_START" });
  try {
    const newRequest = await RequestApi.sendRequest(data);
    dispatch({ type: "SEND_REQUEST_SUCCESS", data: newRequest.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "SEND_REQUEST_FAIL" });
  }
};
