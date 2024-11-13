// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store'
// import './bootstrap.min.css'
// import './index.css'
// import App from './App'
// import * as serviceWorker from './serviceWorker'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this file exports a valid Redux store
import './bootstrap.min.css'; // Bootstrap CSS
import './index.css'; // Custom CSS
import App from './App'; // Main App component
import * as serviceWorker from './serviceWorker'; // Service worker

// Render the main application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Ensure there's a div with id 'root' in your index.html
);

// Service worker registration
serviceWorker.unregister(); // Change to serviceWorker.register() for production