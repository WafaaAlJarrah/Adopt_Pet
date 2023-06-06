import * as UploadApi from "../api/UploadRequest";
// import * as RequestApi from "../api/RequestRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action started");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log("error from uploadAction/uploadImage: ", error);
  }
};

export const uploadSpecification = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newSpecification = await UploadApi.uploadSpecification(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newSpecification.data });
  } catch (error) {
    console.log("error from uploadAction/uploadSpecification: ", error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};

export const uploadAnimal = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_ANIMAL_START" });
  try {
    const newAnimal = await UploadApi.uploadAnimal(data);
    dispatch({ type: "UPLOAD_ANIMAL_SUCCESS", data: newAnimal.data });
  } catch (error) {
    console.log("error from uploadAction/uploadAnimal: ", error);
    dispatch({ type: "UPLOAD_ANIMAL_FAIL" });
  }
};

export const uploadHistory = (requestId, status) => async (dispatch) => {
  dispatch({ type: "UPLOAD_HISTORY_START" });
  try {
    const data = {
      status: status,
      requestInfo: requestId,
    };
    console.log("data from uploadHistory action ", data);
    const newHistory = await UploadApi.uploadHistory(data);
    dispatch({ type: "UPLOAD_HISTORY_SUCCESS", data: newHistory.data });
  } catch (error) {
    console.log("error from uploadAction/uploadHistory: ", error);
    dispatch({ type: "UPLOAD_HISTORY_FAIL" });
  }
};
