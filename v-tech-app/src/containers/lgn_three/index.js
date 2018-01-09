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

import './css_lgn3/new_chat.css'

const Lgn_three = props => (
<div class="contain">
    <div class="newc_form_area">
      <h4 id="stp_last">Last Step</h4>
      <h3 id="first_chat">YOUR FIRST CHAT</h3>

        <input type="email" class="form-control chat_email" id="email_add" placeholder="Friend's Email"></input>
 
        <button id="new_chat_next" class="btn btn-primary" onClick={() => props.changePage()}>NEXT STEP</button>
            <Link to="/chats"><p class="new_chat_skip">Skip for now</p></Link>
    </div>
    </div>
  )
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/chats')
  }, dispatch)
  
  export default connect(
    null, 
    mapDispatchToProps
  )(Lgn_three)
  