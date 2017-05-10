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
import ContactCard from './ContactCard';
import ClientCard from './ClientCard';
import firebase from 'firebase';
import header from './header.png';
import '../main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localNumber: 'yo',
      contacts: [], 
      buttons: []   
    }
  }
  componentWillMount() {
    this.setState({
      contacts: [(
        <div>
        <ClientCard />
        <ContactCard/>
        
        </div>
      )],
      buttons: [(
        <div className="buttons-bg">
        <div className="btn btn-default col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={() =>{this.addContact()}}>
          <h2> + </h2>
        </div>
        <hr />
        <div className="btn btn-info col-xs-12 col-sm-12 col-md-12 col-lg-12"  onClick={() =>{this.upload()}}>
          <h2>Done!</h2>
        </div>
        </div>)]
  
    })
  }

  statusReport() {
    
  }

  enterNumber(num) {
    console.log('hey there');
    this.props.setNumber(this.state.localNumber);
    var temp = this.state.contacts;
    temp.push(<ClientCard />, <ContactCard/>);
    this.setState({
      contacts: temp,
      buttons: [(
        <div className="buttons-bg">
        <div className="btn btn-default col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={() =>{this.addContact()}}>
          <h2> + </h2>
        </div>
        <hr />
        <div className="btn btn-info col-xs-12 col-sm-12 col-md-12 col-lg-12"  onClick={() =>{this.upload()}}>
          <h2>Done!</h2>
        </div>
        </div>)]
    })
  }
  
  addContact() {
    var temp = this.state.contacts;
    var num = this.props.numberOfContacts;
    temp.push(<ContactCard/>)
    this.setState({
      contacts: temp
    })
    this.props.setNumberOfContacts(num + 1);
  }

  updateSearch(event) {
    this.setState({
      localNumber: event.target.value
    })

  }

  upload() {
    var name = this.props.number;
    const root = firebase.database().ref().child(name);
    console.log(this.props.contacts);
    root.set({
        call: this.props.call,
        location: this.props.location
      })
    const contactsRef = firebase.database().ref().child(name + '/contacts/');
    console.log(this.props.numberOfContacts);
    for (var i = 1 ; i <= this.props.numberOfContacts ; i++) {
      contactsRef.child(this.props.contacts[i].number).set(this.props.contacts[i]);
    }
    this.setState({
      buttons: [(
        <div>
          <h1>Awesome! You're done now, we'll take of the rest, thanks for using ur911!</h1>
        </div>)]
    })
    
  }

  render() {
    return (
      <div className="main">
      <div className="App">
        
      <div className="body">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
          <img className="header" src={header} />
        </div>
        
        <div>

          {this.state.contacts}

        </div>
           
          {this.state.buttons}
      </div>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number,
    numberOfContacts: state.numberOfContacts,
    contacts: state.contacts,
    location: state.location,
    call: state.call
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

export default connect(mapStateToProps, mapDispatchToProps)(App);