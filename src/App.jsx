import React, { useEffect } from 'react';
import store from './store';
import collectionReducer from './collectionSlice';
import actions from './actions';

console.log('App.js is running!');
const App = () => {
  useEffect(() => {}, [store.dispatch]);
  const starterCollections = [
    { id: 0, name: 'collection1', elements: [] },
    { id: 1, name: 'collection2', elements: [] },
  ];

  starterCollections.forEach((collection) => {
    store.dispatch(actions.addCollection(collection));
  });
  return (
    <div>
      <h1>Welcome to Collectionomicon!</h1>
      <div>
        <collectionBox />
      </div>
    </div>
  );
};

const collectionBox = () => {
  // this will be the main element that holds all the collections the user has
  const collections = store.getState().collections.map((collection) => {
    return (
      <collection
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

const collection = ({ id, name, elements }) => {
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
