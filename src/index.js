import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './State/Store'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
            <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
