import React from 'react';
//import reactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import store from './src/store';
import { Provider } from 'react-redux';

console.log('index.js is running!');

//start the app
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//check if the user is logged in
//if not, redirect to the login page
