import React, { useEffect } from 'react';
import store from './store';
import collectionReducer from './collectionSlice';
import { useSelector } from 'react-redux';
import { addCollection } from './collectionSlice';

console.log('App.js is running!');
const App = () => {
  useEffect(() => {
    const starterCollections = [
      { id: 0, name: 'collection1', elements: [] },
      { id: 1, name: 'collection2', elements: [] },
    ];
    starterCollections.forEach((collection) => {
      store.dispatch(addCollection(collection));
    });
  }, []);

  const collections = useSelector((state) => state.collection);

  useEffect(() => {}, [collections]);

  return (
    <div>
      <h1>Welcome to Collectionomicon!</h1>
      <div>
        <CollectionBox />
      </div>
    </div>
  );
};

const CollectionBox = () => {
  // this will be the main element that holds all the collections the user has
  //console.log(store.getState());
  if (store.getState().collection.collections.length === 0) {
    return <div>No collections to see yet</div>;
  }
  const collections = store
    .getState()
    .collection.collections.map((collection) => {
      return (
        <Collection
          key={collection.id}
          id={collection.id}
          name={collection.name}
          elements={collection.elements}
        />
      );
    });

  return (
    <div>
      <h2>Collection Box</h2>
      {collections}
    </div>
  );
};
// {[collections]}
const Collection = ({ id, name, elements }) => {
  // this represents a single collection
  return (
    <div>
      <h3>Collection</h3>
      <p>{id}</p>
      <p>{name}</p>
      <p>{elements}</p>
    </div>
  );
};

export default App;
