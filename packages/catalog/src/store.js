import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

// const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];
const enhancers = compose(applyMiddleware(...middleware));

export default createStore(rootReducer, enhancers);
