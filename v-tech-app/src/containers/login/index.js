import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
//import Home from '../home'
//import About from '../about'
//import { Button } from 'reactstrap';
import './login.css'

const App = () => (

  <div class="form_area">
    <p>Welcome to the</p>
      <img src={require("../../images/Full_Logo.png")} alt={"ChatterBox logo"} />
        <form>
          <input type="email" class="form-control" id="email_add" placeholder="Email"></input>
          <input type="password" class="form-control" id="pswd" placeholder="Password"></input>
          <button type="submit" id="login" class="btn btn-primary">LOGIN</button>
        </form>
    <Link to="/"><div class="register">No account yet? Get setup now</div></Link>
  </div>
)

export default App