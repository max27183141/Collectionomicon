import React from 'react';

console.log('App.js is running!');
const App = () => {
  return (
    <div>
      <h1>Welcome to Collectionomicon!</h1>
      <div></div>
    </div>
  );
};

const collectionBox = () => {
  // this will be the main element that holds all the collections the user has
  return (
    <div>
      <h2>Collection Box</h2>
    </div>
  );
};

const collection = () => {
  // this represents a single collection
  return (
    <div>
      <h3>Collection</h3>
    </div>
  );
};

export default App;
