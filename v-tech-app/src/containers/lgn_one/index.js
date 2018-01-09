import React from 'react';
//import { Component } from "react";
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
//import ReactDOM from 'react-dom'
//import { Button } from 'reactstrap';
//import NavLink from "react-router-dom"
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './lgn_one.css'

const Lgn_one = props => (

  <div class="reg_form_area">
    <h4 id="stp_one">Step One</h4>
    <h3 id="basics">THE BASICS</h3>
        <form>
        <input type="text" class="form-control reg_field" id="name" placeholder="Your name"></input>
          <input type="email" class="form-control reg_field" id="email_add" placeholder="Email"></input>
          <input type="password" class="form-control reg_field" id="pswd" placeholder="Password"></input>
         <button type="submit" id="reg_next" class="btn btn-primary" onClick={() => props.changePage()}>NEXT STEP</button>
        </form>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/register_two')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Lgn_one)

