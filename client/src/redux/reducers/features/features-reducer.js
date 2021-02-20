import FeaturesActionTypes from "./features-action-types";

const INITIAL_STATE = {
  darkTheme: false,
  toggleSidebar: false,
};

const featuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeaturesActionTypes.ENABLE_DARK_MODE:
      return {
        ...state,
        darkTheme: state.darkTheme ? false : true,
      };
    case FeaturesActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSidebar: state.toggleSidebar ? false : true,
      };
    default:
      return state;
  }
};

export default featuresReducer;
