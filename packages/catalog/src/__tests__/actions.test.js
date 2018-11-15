import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { expect } from 'chai';
import * as actions from '../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('does a FETCH_CATALOG and RECEIVE_CATALOG when getting Catalog', () => {
    fetchMock.getOnce('https://api.flow.io/frontend-exercises/catalog/items', {
      body: [{"id":"cit-23aefccfbc7a48b2a62dc000145d8df8","number":"123445","locale":"en_IE","name":"3-Tier Ceramic Hanging Planter","price":{"amount":153,"currency":"GBP","label":"£153.00"},"categories":[],"attributes":{},"dimensions":{},"images":[]} ],
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: actions.FETCH_CATALOG },
      {
        type: actions.RECEIVE_CATALOG,
        catalog: [{"id":"cit-23aefccfbc7a48b2a62dc000145d8df8","number":"123445","locale":"en_IE","name":"3-Tier Ceramic Hanging Planter","price":{"amount":153,"currency":"GBP","label":"£153.00"},"categories":[],"attributes":{},"dimensions":{},"images":[]} ],
      },
    ];
    const store = mockStore({
      isLoading: true,
      items: [],
      searchTerm: '',
      searchType: 'all',
    });
    return store.dispatch(actions.getCatalog()).then(() => {
      // return of async actions
      expect(store.getActions()).eql(expectedActions);
    });
  });

  it('does a LOADING when deleting a Catalog Item', () => {
    fetchMock.delete('https://api.flow.io/frontend-exercises/catalog/items/123445', {
      body: [{"id":"cit-23aefccfbc7a48b2a62dc000145d8df8","number":"123445","locale":"en_IE","name":"3-Tier Ceramic Hanging Planter","price":{"amount":153,"currency":"GBP","label":"£153.00"},"categories":[],"attributes":{},"dimensions":{},"images":[]} ],
      headers: { 'content-type': 'application/json' },
    });
    const expectedActions = [
      { type: actions.LOADING },
      {
        type: actions.DELETE_COMPLETE,
        number: '123445',
      },
    ];
    const store = mockStore({
      isLoading: true,
      items: [{"id":"cit-23aefccfbc7a48b2a62dc000145d8df8","number":"123445","locale":"en_IE","name":"3-Tier Ceramic Hanging Planter","price":{"amount":153,"currency":"GBP","label":"£153.00"},"categories":[],"attributes":{},"dimensions":{},"images":[]} ],
      searchTerm: '',
      searchType: 'all',
    });
    return store.dispatch(actions.deleteCatalogItem('123445')).then(() => {
      // return of async actions
      expect(store.getActions()).eql(expectedActions);
    });
  });

});
