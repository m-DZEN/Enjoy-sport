import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD:client/src/index.js

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
=======
>>>>>>> 12ef5fd8c3054dd17bc4115e88bbba05af39749d:test-graphs/src/index.js
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD:client/src/index.js
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
=======
  <App />,
>>>>>>> 12ef5fd8c3054dd17bc4115e88bbba05af39749d:test-graphs/src/index.js
);
