import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/ClientCard.css';

import {DropdownButton, MenuItem } from 'react-bootstrap';

class ClientCardDos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      call: 'Albemarle'
    }
  }

  render() {
    return (
      <div className="client-card">
        <div className="card-padding">
            <div className="row number-row">
              <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <p className="number"> Your number:
                  <input className="custom-input" placeholder="123-456-7890"/>
                </p>
              </div>
            </div>
            <hr />
            <div className="row service-row">
                <div className="col col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
                  <p className="service-text"> If checked, we will call your local authorities when you use our service, elsewise we will just message your emergency contacts.</p>
                </div>
                <div className="col col-xs-4 col-sm-4 col-md-4 col-lg-4 switch-col">
                  <div className="switch-line"><label className="switch">
                    <input type="checkbox" /><div className="slider round"></div>
                  </label>
                  </div>
                </div>
            </div>
            <hr />
            <div className="row location-row">
              <DropdownButton title={this.state.call} >
                <MenuItem eventKey="1">Call</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2">Text</MenuItem>
            </DropdownButton>
            </div>
        </div>
      </div> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientCardDos);

/*
<div className="client-header">
                
            </div>
            <div className="client-header">
              <div className="row">
                
            </div>*/