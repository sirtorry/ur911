import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { Provider }  from 'react-redux';
import  store  from "./store";
import firebase from 'firebase';
import SplashScreen from './components/SplashScreen';
//https://ur911-25aa5.firebaseio.com/
//gs://ur911-25aa5.appspot.com
import './main.css';
import Main from './components/main';
 var config = {
    apiKey: "AIzaSyCbJjcp2qfWYAEXhyBb2qPBd0F_1HUk-Rs",
    authDomain: "ur911-25aa5.firebaseapp.com",
    databaseURL: "https://ur911-25aa5.firebaseio.com",
    projectId: "ur911-25aa5",
    storageBucket: "ur911-25aa5.appspot.com",
    messagingSenderId: "226319310798"
  };
firebase.initializeApp(config);

ReactDOM.render((
  <Provider store ={store}>
      <Main />
  </Provider >
),  document.getElementById('root'));
