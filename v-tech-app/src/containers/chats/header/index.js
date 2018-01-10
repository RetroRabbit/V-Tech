import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import './index.css'

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      <div class="container menu_bar">
        <div class="row ">

            <nav class="col-lg-12 navbar navbar-toggleable-md navbar-light bg-faded my_nav">
              
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

              <div class="holder col-sm-12">
              <div class="row">
                <div class="col-md-4">
                  <div class="dropdown drpdwn">
                    <button class="dropbtn btn btn_new_chat navbar-brand"><span>NEW CHAT</span></button>
                    <div class="dropdown-content drp_box">
                      
                    <input type="text" class="form-control srchFrnd_field" id="friend_email" placeholder="Friend's Email"></input>
                      
                    </div>
                  </div>
                
                  <button class="btn btn_new_group navbar-brand">NEW GROUP</button>
                  
                </div>

                <div class="col-md-8 nav_sec">
                
                  <div class="navbar_imgs">
                  <div class="img2_o "><img class="img2 nav_imgs" src={require("./Icon.png")} alt={"ChatterBox logo"} ></img></div>
                  <Link to="/profile" ><img class="img1 nav_imgs" src={require("../profile/kitten.jpg")} alt={"Profile Pix"} ></img></Link>                  
                  <h6 class="chat_user ">Name Surname</h6>

                </div>
              </div>
              </div>       
          </div>
           </nav>
            
          </div>
        </div>
     

    );
  }
}