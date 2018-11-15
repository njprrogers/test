import { expect } from 'chai';
import reducer from '../reducers/catalogItems';
import * as types from '../actions';
import initialState from '../reducers/initialState';

describe('catalog reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).equal(initialState);
  });
  it('should handle FETCH_CATALOG', () => {
    expect(
      reducer([], {
        type: types.FETCH_CATALOG,
      }),
    ).eql(
      {
        isLoading: true,
      },
    );
  });
  it('should handle RECEIVE_CATALOG', () => {
    expect(
      // reducer(state, { action })
      reducer([], {
        type: types.RECEIVE_CATALOG,
        catalog: [{ item: 'test item' }],
      }),
    ).eql(
      {
        items: [{ item: 'test item' }],
        isLoading: false,
      },
    );
  });
  /*
      return {
        ...state,
        items: action.catalog,
        isLoading: false,
      };

  */
  // it('should handle ADD_TODO', () => {
  //   expect(
  //     reducer([], {
  //       type: types.ADD_TODO,
  //       text: 'Run the tests'
  //     })
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 0
  //     }
  //   ]);

  //   expect(
  //     reducer(
  //       [
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0
  //         }
  //       ],
  //       {
  //         type: types.ADD_TODO,
  //         text: 'Run the tests'
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 1
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0
  //     }
  //   ]);
  // });
});
