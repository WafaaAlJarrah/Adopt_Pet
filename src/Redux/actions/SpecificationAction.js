import * as SpecifApi from "../api/SpecificationsRequest";

export const getSpecifications = (animalType) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
      const { data } = await SpecifApi.getSpecifications(animalType);
      dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "RETREIVING_FAIL" });
    }
  };
