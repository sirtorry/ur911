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
import '../main.css';
class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localNumber: 'yo',
      i: this.props.numberOfContacts,
      contacts: [],
      data: {
        name: 'john smith',
        number: '888',
        call: "yes"
      },
      call: "Call"
    }
  }

  componentDidMount() {
    this.setState({
      i: this.props.numberOfContacts
    })
    console.log(this.state.i);
  }

  enterNumber(num) {
    console.log('hey there');
    this.props.setNumber(this.state.localNumber)
  }
 
  changeName(event) {
    this.setState({
      data: {
        ...this.state.data,
        name: event.target.value
      }
    }, () => this.uploadInfo());
  }

  changeNumber(event) {
    this.setState({
      data: {
        ...this.state.data,
        number: event.target.value
      }
    }, () => this.uploadInfo());
    
  }

  changeCall(event) {
    this.setState({
      data: {
        ...this.state.data,
        call: event.target.value
      }
    }, () => this.uploadInfo());
  }

  uploadInfo() {
    var contacts = this.props.contacts;
    var index = this.state.i;
    const num = this.state.number;
    const number = {
      call_or_text: this.state.call,
      name: this.state.data.name,
      number: this.state.data.number
    }
    contacts[index] = number;
    console.log("look heere");
    this.props.setContacts(contacts);
    console.log(this.state.data);
  }

  clickCall() {
    this.setState({
      call: "Call"
    }, () => this.uploadInfo());
  }
  ///////////
  clickText() {
    this.setState({
      call: "Text"
    }, () => this.uploadInfo());
  }

  render() {
    return (
      <div key={this.props.i} value={this.props.i} className="row contact-card">
        <hr />
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group input-padding">
            <input type="text" value={this.state.value} className="form-control" 
            placeholder="Enter your contact's name here..." onChangeCapture={this.changeName.bind(this)}/>
            </div>
            <div className="input-group">
            <input type="text" value={this.state.value} className="form-control" 
            placeholder="Enter your contact's number here..." onChange={this.changeNumber.bind(this)}/>
            </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <DropdownButton title={this.state.call} >
                <MenuItem eventKey="1" onClick={this.clickCall.bind(this)}>Call</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2" onClick={this.clickText.bind(this)}>Text</MenuItem>
            </DropdownButton>
        </div>
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
    setContacts: (contacts) => {
      dispatch({
        type: 'SETCONTACTS',
        payload: contacts
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactCard);