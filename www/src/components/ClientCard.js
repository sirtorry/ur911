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
class ClientCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localNumber: 'yo',
      contacts: [],
      activeLocation: 'Location'
    }
  }
  enterNumber(num) {
    console.log('hey there');
    this.props.setNumber(this.state.localNumber)
  }
 
  updateSearch(event) {
    this.setState({
      localNumber: event.target.value
    })
  }

  setAlbemarle() {
    this.props.setLocation("Albemarle");
    this.setState({
      activeLocation: "Albemarle"
    })
  }

  setArlington() {
    this.props.setLocation("Arlington");
    this.setState({
      activeLocation: "Arlington"
    })
  }
  
  setYes() {
    this.props.setCall("Yes");
  }

  setNo() {
    this.props.setCall("No");
  }

  render() {
    return (
      <div key={this.props.i} value={this.props.i} className="row client-card">
        <hr />
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group input-padding">
            <h4>Your number: {this.props.number}</h4>
            </div>
            <div className="input-group">
                If this service is used, do you want us to call 911 for you? 
                <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default" onClick={this.setYes.bind(this)}>Yes</button>
                <button type="button" className="btn btn-default" onClick={this.setNo.bind(this)}>No</button>
                 </div>
            </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <DropdownButton id={'hi'} title={this.state.activeLocation}>
                <MenuItem value="Albemarle" eventKey="1" onClick={this.setAlbemarle.bind(this)}>Albemarle</MenuItem>
                <MenuItem divider />
                <MenuItem value="Arlington" eventKey="2" onClick={this.setArlington.bind(this)}>Arlington</MenuItem>
            </DropdownButton>
        </div>
      </div> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number,
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
    setLocation: (location) => {
      dispatch({
        type: 'SETLOCATION',
        payload: location
      })
    },
    setCall: (answer) => {
      dispatch({
        type: 'SETCALL',
        payload: answer
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientCard);