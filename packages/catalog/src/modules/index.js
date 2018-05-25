import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogReducer from '../reducers';

export default combineReducers({
  router: routerReducer,
  catalogReducer
});
