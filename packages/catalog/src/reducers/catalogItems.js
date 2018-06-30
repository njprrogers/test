import initialState from "./initialState";

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATALOG": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "RECEIVE_CATALOG": {
      return {
        ...state,
        items: action.catalog,
        isLoading: false
      };
    }
    case "UPDATE_SEARCH_TERM": {
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    }
    case "UPDATE_SEARCH_TYPE": {
      return {
        ...state,
        searchType: action.searchType
      };
    }
    case "DELETE_COMPLETE": {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(item => {
          return item.number !== action.number;
        })
      };
    }
    case "LOADING": {
      return {
        ...state,
        isLoading: true
      };
    }
    default:
      return state;
  }
};
export default catalog;

// Search selector colocated with catalog reducer
export const searchItems = (state = initialState, searchTerm, searchType) => {
  // state is catalog exported from this reducer
  if (!searchTerm) return state.items;
  return state.items.filter(item => {
    const searchTermLower = searchTerm.toLowerCase();
    const description = item.description ? item.description.toLowerCase() : "";
    const name = item.name ? item.name.toLowerCase() : "";
    const brand =
      item.attributes && item.attributes.brand
        ? item.attributes && item.attributes.brand.toLowerCase()
        : "";
    return (
      description.includes(searchTermLower) ||
      name.includes(searchTermLower) ||
      brand.includes(searchTermLower)
    );
  });
};
