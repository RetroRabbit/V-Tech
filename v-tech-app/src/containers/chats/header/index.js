import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import SideNav from 'react-sidenav';
import './index.css'

export default class App extends React.Component {
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
            <div >
                <div className="header">
                <nav className="header navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="navbar nav flex">
                      <form className="form-inline my-2 my-lg-0">
                      <div class="dropdown">
                        <button class="btn btn-success mx-4 my-sm-0  dropbtn newbtn" type="submit">NEW CHAT</button>
                        <div class="dropdown-content my-5">
                          <a href=""><input class="form-control mr-sm-2 text_box my-4 " type="text" placeholder="Friends Email..." /></a>
                         
                        </div>
                      </div>
                     <button className="btn btn-success my-2 my-sm-0 newbtn" type="submit">NEW GROUP</button>
                      </form>
                      </div>

                      <div className="row pt-0">
                          <div className="list-item my-4 dropdown">
                                  <a href="" className="dropbtn" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename"><h5>Bright Mabuza</h5></a>
                                        <div class="dropdown-content my-5">
                                            <a href="">Settings</a>
                                            <a href="">Log Out</a>
                                        </div>
                          </div>
                          <div className="list-item imgs">
                                  <a href="" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename"><img src={require("../header/Icon.png")} alt={"ChatterBox logo"} /></a>
                          </div>
                          <div className="list-item imgs">
                          <a href="" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename"><img src={require("../header/Icon.png")} alt={"ChatterBox logo"} /></a>
                          </div>
                      </div>
                   
                      
                    </div>
                  </nav>
                </div>
                
                  <div className="sidebar"> 
                      <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4'>       
                          <form className="form-inline my-2 my-lg-0">
                          <input class="form-control mr-sm-2 text_box my-4" type="text" placeholder="Search" />
                          </form>
                      </SideNav>
                  </div>
            </div>

             );
  }
}