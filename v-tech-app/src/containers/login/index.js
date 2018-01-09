import React from 'react';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './css_lgn/login.css'

const Home = props => (
  <div class="contain">
  <div class="lgn_form_area">
    <h3 class="lgn_welcome">Welcome to the</h3>
    <img src={require("../login/Full_Logo.png")} alt={"ChatterBox logo"} />
    <form>
      <input type="email" class="form-control lgn_field" id="email_add" placeholder="Email"></input>
      <input type="password" class="form-control lgn_field" id="pswd" placeholder="Password"></input>
      <button type="submit" id="login" class="btn btn-primary lgn_login">LOGIN</button>
    </form>
    <Link to="/register"><p class="lgn_register">No account yet? Get setup now</p></Link>

  </div>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/register')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)

/*
const App = () => (



  <div class="form_area">
    <p>Welcome to the</p>
      <img src={require("../login/Full_Logo.png")} alt={"ChatterBox logo"} />
        <form>
          <input type="email" class="form-control" id="email_add" placeholder="Email"></input>
          <input type="password" class="form-control" id="pswd" placeholder="Password"></input>
          <button type="submit" id="login" class="btn btn-primary">LOGIN</button>
        </form>
    <Link to="/register"><div class="register">No account yet? Get setup now</div></Link>
  
    <Route exact path="/register" component={Lgn_one} />

  </div>
)

export default App*/