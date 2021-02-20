import searchVideosActionTypes from "./search-videos-action-types";

export const setSearchQuery = (item) => ({
  type: searchVideosActionTypes.SET_SEARCH_QUERY,
  payload: item,
});

export const setSearchedVideos = (item) => ({
  type: searchVideosActionTypes.SET_SEARCHED_VIDEOS,
  payload: item,
});
