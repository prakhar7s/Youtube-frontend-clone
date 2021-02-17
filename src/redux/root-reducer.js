import { combineReducers } from "redux";
import themeReducer from "./reducers/dark-light-mode/dlm-reducer";

const rootReducer = combineReducers({
  themeReducer,
});

export default rootReducer;
