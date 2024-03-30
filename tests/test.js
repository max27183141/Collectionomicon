//make a jest test that checks if the collection reducer is working correctly

import collectionReducer, {
  addCollection,
  removeCollection,
  addElementToCollection,
} from '../src/collectionSlice';

describe('collection reducer', () => {
  it('should return the initial state', () => {
    expect(collectionReducer(undefined, {})).toEqual({
      collections: [],
    });
  });

  it('should add a collection', () => {
    expect(
      collectionReducer(
        { collections: [] },
        addCollection({ id: 0, name: 'collection1', elements: [] })
      )
    ).toEqual({
      collections: [{ id: 0, name: 'collection1', elements: [] }],
    });
  });

  it;
});
