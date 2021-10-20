import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importo el createStore
import {createStore} from 'redux';
import rootReducer from './reducers';
//IMPORT EL REDUCER 
// import el provider
//definimos el store y se lo pasamos a provider
import { Provider } from 'react-redux';



const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //defini store

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
