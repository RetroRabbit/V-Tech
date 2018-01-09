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
import './css_lgn2/lgn_two.css'

const Lgn_two = props => (
  <div class="contain">
    <div class="prfl_form_area">
      <h4 id="stp_two">Step Two</h4>
      <h3 id="prfl_pic">PROFILE PICTURE</h3>

            <div id="prfl_image"> 
            </div>

            <button id="prfl_next" class="btn btn-primary" onClick={() => props.changePage()}>NEXT STEP</button>
            <Link to="/register_three"><p class="reg_skip">Skip for now</p></Link>
    </div>
    </div>
  )
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/register_three')
  }, dispatch)
  
  export default connect(
    null, 
    mapDispatchToProps
  )(Lgn_two)
  