import { combineReducers } from "redux";
import featuresReducer from "./reducers/features/features-reducer";
import searchVideosReducer from "./reducers/search-videos/search-videos-reducer";

const rootReducer = combineReducers({
  featuresReducer,
  searchVideosReducer,
});

export default rootReducer;
