const AuthReduder = (
  state = {
    authData: null,
    loading: false,
    error: false,
    errorMessage: "",
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false, errorMessage: "" };
    case "AUTH_SUCCESS":
      console.log("AUTH data ", action.data.user);
      // localStorage to save the authentication data
      localStorage.setItem("profile", JSON.stringify({ ...action.data.user }));
      const myItem = localStorage.getItem("profile");
      // console.log("user data: ", myItem);
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
        errorMessage: "",
      };

    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };

    case "CLEAR_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: "",
      };

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default AuthReduder;
