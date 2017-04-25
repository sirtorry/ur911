import React, { Component } from 'react';
import logo from '../logo.png';
class ContactButtons extends Component {
    addContact() {
    var temp = this.state.contacts;
    temp.push(<ContactCard />)
    this.setState({
      contacts: temp
    })
  }
  render() {
    return (
      <div className="App">
        <hr />
        <div className="btn btn-default col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={() =>{this.addContact()}}>
          <h2> + </h2>
        </div>
        <hr />
        <div className="btn btn-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h2>Done!</h2>
        </div>
      </div>
    );
  }
}

export default ContactButtons;    
    