import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Register} from '../../reducers/userregisterreducer'

import './lgn_one.css'

class Lgn_one extends Component {
  constructor(props) {
    super(props);
    this.state = {name:"",email:"",password:""};
    this.registeruser = this.registeruser.bind(this);
    this.updateInputName = this.updateInputName.bind(this);
    this.updateInputEmail = this.updateInputEmail.bind(this);
    this.updateInputPassword = this.updateInputPassword.bind(this);
  }
  render() {
    return (
      <div class="contain">
      <div class="reg_form_area">
        <h4 id="stp_one">Step One</h4>
        <h3 id="basics">THE BASICS</h3>
            <form>
            <input type="text" class="form-control reg_field" id="name" placeholder="Your name" onChange={this.updateInputName} value={this.state.name}></input>
              <input type="email" class="form-control reg_field" id="email_add" placeholder="Email" onChange={this.updateInputEmail} value={this.state.email}></input>
              <input type="password" class="form-control reg_field" id="pswd" placeholder="Password" onChange={this.updateInputPassword} value={this.state.password}></input>
             <button type="submit" id="reg_next" class="btn btn-primary" onClick={this.registeruser}>NEXT STEP</button>
            </form>
      </div>
      </div>
    )
  }

  registeruser() {
    this.props.Register(this.state.name,this.state.email,this.state.password);
    this.props.changePage();
    this.setState({
      email: '',
      password: ''
    });
  }
  updateInputName(event) {
    this.setState({
      name: event.target.value
    });
  }
  updateInputEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  updateInputPassword(event) {
    this.setState({
      password: event.target.value
    });
  }
}

const mapStateToProps = state => ({
  name: state.userregisterreducer.name,
  email: state.userregisterreducer.email,
  password: state.userregisterreducer.password
})

const mapDispatchToProps = dispatch => bindActionCreators({
  Register,
  changePage: () => push('/register_two')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Lgn_one)

