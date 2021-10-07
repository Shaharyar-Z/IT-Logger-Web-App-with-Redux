import { combineReducers } from "redux";
import logReducer from "./logReducer";
import developerReducer from "./developerReducer";

export default combineReducers({
  log: logReducer,
  developer: developerReducer,
});
