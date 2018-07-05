import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as searchReducer } from 'redux-search';
import catalog from './catalogItems';

export default combineReducers({
  router: routerReducer,
  search: searchReducer,
  catalog,
});
