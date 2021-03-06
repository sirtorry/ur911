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
import im from "./../splashlogo.png";
var octicons = require('octicons');

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
componentDidMount() {
  console.log("just checking in!");
}
  
handleKeyPress(target) {
    if(target.charCode==13){
        console.log("enter works!")
    }
}

 enterNumber(num) {
    console.log('hey there');
    this.props.setNumber(this.state.localNumber);
  }

  render() {
    return (
      <div className="main">
        <img src={im} className="logo"></img>
          <div className="input-group main-input-group">
            <input type="text" value={this.state.value} 
            className="form-control input" 
            placeholder="Enter your number here" 
            onKeyPress={this.handleKeyPress}/>
             <span className="input-group-btn">
            <button className="btn btn-default b"  onClick={() => {this.enterNumber(this.props.number)}}><Link to="/home">Go!</Link></button>
            </span>
          </div>
          <Link to="../https://www.github.com/sirtorry/ur911">
           <svg  className="btn icon" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/>
           
           </svg></Link>
           
      </div> 
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
    setNumber: (number) => {
      dispatch({
        type: 'SETNUMBER',
        payload: number
      })
    },
    setNumberOfContacts: (number) => {
      dispatch({
        type: 'SETNUMBEROFCONTACTS',
        payload: number
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);