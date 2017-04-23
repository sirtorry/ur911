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
    })
    this.uploadInfo();
  }

  changeNumber(event) {
    this.setState({
      data: {
        ...this.state.data,
        number: event.target.value
      }
    });
    this.uploadInfo();
  }

  changeCall(event) {
    this.setState({
      data: {
        ...this.state.data,
        call: event.target.value
      }
    })
    this.uploadInfo();
  }

  uploadInfo() {
    var contacts = this.props.contacts;
    var index = this.state.i;
    const num = this.state.number;
    const number = {
      call: this.state.data.call,
      name: this.state.data.name,
      number: this.state.data.number
    }
    contacts[index] = number;
    console.log("look heere");
    this.props.setContacts(contacts);
    console.log(this.props.contacts);
  }

  render() {
    return (
      <div key={this.props.i} value={this.props.i} className="row">
        <hr />
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group input-padding">
            <input type="text" value={this.state.value} className="form-control" placeholder="Enter their name here..." onChange={this.changeName.bind(this)}/>
            <span className="input-group-addon">Contact Name</span>
            </div>
            <div className="input-group">
            <input type="text" value={this.state.value} className="form-control" placeholder="Enter their number here..." onChange={this.changeNumber.bind(this)}/>
            <span className="input-group-addon">Contact Number</span>
            </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <DropdownButton title="Call?" >
                <MenuItem eventKey="1" >Call</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2" active>Text</MenuItem>
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