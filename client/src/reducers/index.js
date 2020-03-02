import { combineReducers } from "redux";
import { mentors, mentor } from "./mentorsReducer";
import { errors } from "./utilReducers";

const rootReducer = combineReducers({
  mentors,
  mentor,
  errors
});

export default rootReducer;
