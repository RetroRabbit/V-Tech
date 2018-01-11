import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'

class AppHeader extends React.Component {
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
            <div class="header_main head_div1 ">
                <div className="header ">
                <nav className="header navbar  navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                      <div className="navbar head_nav nav ">
                      <form className="form-inline my-2 my-lg-0">
                      <div class="dropdown">
                        <button class="btn dropbtn btn_new_chat" type="submit">NEW CHAT</button>
                        <div class="dropdown-content my-5">
                          <a href=""><input class="form-control mr-sm-2 text_box my-4" type="text" placeholder="Friends Email..." /></a>
                         
                        </div>
                      </div>
                     <button className="btn btn_new_group" type="submit">NEW GROUP</button>
                      </form>
                      </div>

                      <div className="nav_row">
                          <div className="list-item my-4 dropdown">
                                  <a href="" className="dropbtn" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename"><h6 class="user">{this.props.name}</h6></a>
                                        <div class="dropdown-content">
                                            <a href="">Settings</a>
                                            <a href="">Log Out</a>
                                        </div>
                          </div>
                          <div className="img1">
                                  <a href="" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename"><img class="img1_i" src={require("../header/Icon.png")} alt={"ChatterBox logo"} /></a>
                          </div>
                          <div className="img2">
                          <div class="img_box"><Link to="/profile" ><img img class="img2_i" src={require("../profile/kitten.jpg")} alt={"ChatterBox logo"} ></img></Link></div>
                          </div>
                      </div>
                   
                      
                    </div>
                  </nav>
                </div>
            </div>

             );
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

export default connect(
  mapStateToProps, 
  null
)(AppHeader)