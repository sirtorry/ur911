import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { Provider }  from 'react-redux';
import  store  from "./store";
import firebase from 'firebase';
//https://ur911-25aa5.firebaseio.com/
//gs://ur911-25aa5.appspot.com

 var config = {
    
  };
firebase.initializeApp(config);

ReactDOM.render((
  <Provider store ={store}>
      <App />
  </Provider >
),  document.getElementById('root'));
