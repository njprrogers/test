import { itemsClient, documentsClient } from "../client";

export const SEARCH_CATALOG = "SEARCH_CATALOG";
export function searchCatalog(subreddit) {
  return {
    type: SEARCH_CATALOG,
    subreddit
  };
}
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm
  };
}
export const UPDATE_SEARCH_TYPE = "UPDATE_SEARCH_TYPE";
export function updateSearchType(searchType) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchType
  };
}
export const FETCH_CATALOG = "FETCH_CATALOG";
function fetchCatalog(items) {
  return {
    type: FETCH_CATALOG
  };
}
export const RECEIVE_CATALOG = "RECEIVE_CATALOG";
function receiveCatalog(items) {
  return {
    type: RECEIVE_CATALOG,
    catalog: items.result,
    receivedAt: Date.now()
  };
}
export const LOADING = "LOADING";
function loading() {
  return {
    type: LOADING
  };
}
export const DELETE_COMPLETE = "DELETE_COMPLETE";
function deleteComplete(number) {
  return {
    type: DELETE_COMPLETE,
    number: number
  };
}
export const EDIT_ITEM = "EDIT_ITEM";
export function editCatalogItem(number) {
  return {
    type: EDIT_ITEM,
    number: number
  };
}
/**
 * Get the catalog items from the flow api
 */
export function getCatalog() {
  return function dispatchIt(dispatch) {
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    dispatch(fetchCatalog());
    return itemsClient
      .get("frontend-exercises")
      .then(
        response => response,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveCatalog(json))
      );
  };
}
/**
 * Delete a catalog item from the flow api
 * @param {Event} e - Click event
 */
export function deleteCatalogItem(e) {
  const number = e.target.dataset.number;
  return function dispatchIt(dispatch) {
    dispatch(loading());
    // deleteByNumber(organization, number, options = {})
    return itemsClient
      .deleteByNumber("frontend-exercises", number)
      .then(
        response => response,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(response =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(deleteComplete(number))
      );
  };
}
/**
 * Delete a catalog item from the flow api
 * @param {String} searchTerm - Search term entered by user
 */
export function searchCatalogItems(searchTerm) {
  return function dispatchIt(dispatch, getState) {
    dispatch(updateSearchTerm(searchTerm));
    const state = getState();
    const searchQuery = getSearchQuery(state.searchType, searchTerm);
    dispatch(fetchCatalog());
    return documentsClient
      .getCatalog("frontend-exercises", {
        params: {
          q: searchQuery
        }
      })
      .then(
        response => response,
        error => console.log("An error occurred.", error)
      )
      .then(response => {
        dispatch(receiveCatalog(response));
      });
  };
}
function getSearchQuery(searchType, searchTerm) {
  if (searchType === "all") {
    return searchTerm;
  }
  if (!isNaN(searchTerm)) {
    return `number:${searchTerm}`;
  }
  if (searchType === "category") {
    return `category:${searchTerm}`;
  }
  if (searchType === "brand") {
    return `brand:${searchTerm}`;
  }
  return searchTerm;
}
