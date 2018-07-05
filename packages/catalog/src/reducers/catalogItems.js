import initialState from './initialState';

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATALOG': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RECEIVE_CATALOG': {
      return {
        ...state,
        items: action.catalog,
        isLoading: false,
      };
    }
    case 'UPDATE_SEARCH_TERM': {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
    case 'UPDATE_SEARCH_TYPE': {
      return {
        ...state,
        searchType: action.searchType,
      };
    }
    case 'DELETE_COMPLETE': {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(item => item.number !== action.number),
      };
    }
    case 'LOADING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
export default catalog;
