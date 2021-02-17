import themeActionTypes from "./dlm-action-types";

const INITIAL_STATE = {
  darkTheme: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case themeActionTypes.ENABLE_DARK_MODE:
      return {
        ...state,
        darkTheme: state.darkTheme ? false : true,
      };
    default:
      return state;
  }
};

export default themeReducer;
