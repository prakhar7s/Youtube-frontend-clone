const {
  default: searchVideosActionTypes,
} = require("./search-videos-action-types");

const INITIAL_STATE = {
  searchQuery: "",
  searchedVideos: [],
};

const searchVideosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchVideosActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case searchVideosActionTypes.SET_SEARCHED_VIDEOS:
      return {
        ...state,
        searchedVideos: action.payload,
      };
    default:
      return state;
  }
};

export default searchVideosReducer;
