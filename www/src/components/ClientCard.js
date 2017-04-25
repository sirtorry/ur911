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

  updateLocation(value) {
    this.setState({activeLocation: 'all'});
    this.props.setLocation('ufgx');
    console.log(this.props.location);
  }
   
  render() {
    return (
      <div key={this.props.i} value={this.props.i} className="row">
        <hr />
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group input-padding">
            <h4>Your number: {this.props.number}</h4>
            </div>
            <div className="input-group">
                Do you want to disable this service?:   
                <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">Yes</button>
                <button type="button" className="btn btn-default">No</button>
                 </div>
            </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <DropdownButton id={'hi'} title={this.state.activeLocation}>
                <MenuItem value="Albemarle" eventKey="1" onClick={(value) => {this.updateLocation()}}>Albemarle</MenuItem>
                <MenuItem divider />
                <MenuItem value="Arlington" eventKey="2" onClick={(value) => {this.updateLocation()}}>Arlington</MenuItem>
            </DropdownButton>
        </div>
      </div> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number,
    location: state.location
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientCard);