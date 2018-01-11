import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './css_lgn/login.css'
import {Online} from '../../reducers/userreducer'
import {login_successful, login_unsuccessful} from '../../modules/loginreducer'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {email:"",password:""};
    this.checkDetails = this.checkDetails.bind(this);
    this.updateInputEmail = this.updateInputEmail.bind(this);
    this.updateInputPassword = this.updateInputPassword.bind(this);
  }

  render(){
    return (
    <div class="contain">
    <div class="lgn_form_area">
      <h3 class="lgn_welcome">Welcome to the</h3>
      <img src={require("../login/Full_Logo.png")} alt={"ChatterBox logo"} />
      <form>
        <input type="email" class="form-control lgn_field" name="aa" id="email_add" placeholder="Email" value={this.state.email} onChange={this.updateInputEmail}></input>
        <input type="password" class="form-control lgn_field" id="pswd" placeholder="Password" value={this.state.password} onChange={this.updateInputPassword}></input>
        <button type="submit" id="login" class="btn btn-primary lgn_login" disabled={this.props.isLogInPending} onClick={this.checkDetails}>LOGIN</button>
      </form>
      <Link to="/register"><p class="lgn_register">No account yet? Get setup now</p></Link>
  
    </div>
    </div>)
  }

  checkDetails() {
    for (var i=0;i<this.props.users.length;i++) {
      if (this.state.email === this.props.users[i].email && this.state.password === this.props.users[i].password) {
        this.props.Online(this.props.users[i].name,this.props.users[i].email);
        this.props.login_successful();
        this.props.changePage();
      } else {
        this.props.login_unsuccessful();
      }
    }
    this.setState({
      email: '',
      password: ''
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
  users: state.users,
  name: state.userreducer.name,
  email: state.userreducer.email,
  isLogInPending: state.loginreducer.isLogInPending,
  isLogInSucess: state.loginreducer.isLogInSucess,
  isLogInFail: state.loginreducer.isLogInFail
})

const mapDispatchToProps = dispatch => bindActionCreators({
  Online,
  login_successful,
  login_unsuccessful,
  changePage: () => push('/chats')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home)
