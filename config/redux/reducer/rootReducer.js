import { combineReducers } from "redux";
import pengalamanReducer from "./pengalamanReducer";

const rootReducer = combineReducers({
  pengalaman: pengalamanReducer,
});

export default rootReducer;