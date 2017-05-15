import React, { Component } from 'react';
import logo from '../logo.png';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import '../styles/App.css';
import {DropdownButton, MenuItem }from 'react-bootstrap';
import '../styles/SplashScreen.css';
import '../main.css';
import SplashScreen from './SplashScreen';
import App from './App';
var octicons = require('octicons');

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="test">
        <Route exact path="/" component={SplashScreen} />
        <Route path="/home" component={App} />
        </div>
        </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number,
    contacts: state.contacts,
    numberOfContacts: state.numberOfContacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);