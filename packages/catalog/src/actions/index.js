import Items from '../api-0.5.16/items';

const itemsClient = new Items({
  host: 'https://api.flow.io',
  auth: 'xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh'
});

export const SEARCH_CATALOG = 'SEARCH_CATALOG';
export function searchCatalog(subreddit) {
  return {
    type: SEARCH_CATALOG,
    subreddit
  };
}
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm
  };
}
export const RECEIVE_CATALOG = 'RECEIVE_CATALOG';
function receiveCatalog(items) {
  return {
    type: RECEIVE_CATALOG,
    catalog: items.result,
    receivedAt: Date.now()
  };
}
export const FETCH_CATALOG = 'FETCH_CATALOG';
function fetchCatalog() {
  return {
    type: FETCH_CATALOG
  };
}
export function getCatalog() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function dispatchIt(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    // dispatch(requestPosts(subreddit));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return itemsClient.get('frontend-exercises')
      .then(
        response => response,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveCatalog(json)));
  };
}
