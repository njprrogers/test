import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as searchReducer } from "redux-search";
import catalog, * as fromSearch from "./catalogItems";

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  catalog
});

export const getVisibleItems = (state, searchKey) =>
  fromSearch.searchItems(state, searchKey);
