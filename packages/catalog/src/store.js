import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { reduxSearch } from 'redux-search';

export const history = createHistory();

// const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];
const enhancers = compose(
  applyMiddleware(...middleware)
  // reduxSearch({
  //   // Configure redux-search by telling it which resources to index for searching
  //   resourceIndexes: {
  //     // In this example Books will be searchable by :title and :author
  //     items: ['description']
  //   },
  //   // This selector is responsible for returning each collection of searchable resources
  //   resourceSelector: (resourceName, state) => {
  //     // In our example, all resources are stored in the state under a :resources Map
  //     // For example "books" are stored under state.resources.books
  //     return state.catalog;
  //   }
  // })
);


export default createStore(rootReducer, enhancers);
