import * as AuthApi from "../api/AuthRequest";

//formData : all data received from login Form
export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    //const errorMessage = error.response.data;
    const errorMessage = error.response.data;
    console.log(error);
    dispatch({ type: "AUTH_FAIL", payload: errorMessage });
  }
};

//formData : all data received from signUp Form
export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    const errorMessage = error.response.data.message;
    console.log(error);
    dispatch({ type: "AUTH_FAIL", payload: errorMessage });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
