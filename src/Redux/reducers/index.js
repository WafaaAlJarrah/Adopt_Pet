//this file is for all reducers of our project
//to combine all data in the storage
import { combineReducers } from "redux";

import AuthReduder from "./AuthReducer";
import SpecificationReducer from "./SpecificationReducer";

export const reducers = combineReducers({
  AuthReduder,
  SpecificationReducer,
});
