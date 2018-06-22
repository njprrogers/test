import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import catalog, * as fromSearch from "./catalogItems";
import { reducer as searchReducer, reduxSearch } from "redux-search";

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  catalog
});

export const getVisibleItems = (state, searchKey) =>
  fromSearch.searchItems(state, searchKey);
