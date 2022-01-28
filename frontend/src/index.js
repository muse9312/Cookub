import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';




let procedure = ['만드는법1', '만드는법2'];
function reducer3(state = procedure, 액션) {
  if (액션.type === 'add') {
    procedure.push(액션.payload)
    return procedure
  } else {
    return state
  }

}


let store = createStore(combineReducers({ reducer3 }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
