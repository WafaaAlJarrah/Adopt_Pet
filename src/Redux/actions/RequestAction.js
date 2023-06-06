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

//get requests
export const getAllRequests = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_REQUESTS_START" });
  try {
    const { data } = await RequestApi.getAllRequests();
    dispatch({ type: "RETREIVING_REQUESTS_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_REQUESTS_FAIL" });
  }
};

//ARCHIVE request (accepted or rejected)
export const archiveRequest = (requestId) => async (dispatch) => {
  dispatch({ type: "ARCHIVE_REQUEST_START" });
  try {
    await RequestApi.archiveRequest(requestId);
    dispatch({ type: "ARCHIVE_REQUEST_SUCCESS", requestId });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ARCHIVE_REQUEST_FAIL" });
  }
};


//get one request
export const getRequest = (requestId) => async (dispatch) => {
  dispatch({ type: "RETREIVING_ONE_REQUEST_START" });
  try {
    const { data } = await RequestApi.getRequest(requestId);
    dispatch({ type: "RETREIVING_ONE_REQUEST_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_ONE_REQUEST_FAIL" });
  }
};