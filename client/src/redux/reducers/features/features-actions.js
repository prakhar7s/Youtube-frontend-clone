import FeaturesActionTypes from "./features-action-types";

export const enableDarkMode = () => ({
  type: FeaturesActionTypes.ENABLE_DARK_MODE,
});

export const toggleSidebar = () => ({
  type: FeaturesActionTypes.TOGGLE_SIDEBAR,
});
