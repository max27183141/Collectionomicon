import React from 'react';
import reactDOM from 'react-dom';
import App from './src/App';

console.log('index.js is running!');

//start the app
reactDOM.render(<App />, document.getElementById('root'));

//check if the user is logged in
//if not, redirect to the login page
