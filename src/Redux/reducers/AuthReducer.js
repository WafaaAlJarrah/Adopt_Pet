const AuthReduder = (
  state = {
    authData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      console.log("AUTH data ", action.data.newUser);
      // localStorage to save the authentication data
      localStorage.setItem("profile", JSON.stringify({ ...action?.data.newUser }));
      const myItem = localStorage.getItem("profile");
      console.log("user data: ", myItem);
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
      };

    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReduder;
