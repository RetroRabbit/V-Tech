import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import SideNav from 'react-sidenav';


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
            <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-outline-success mx-2 my-sm-0 " type="submit">NEW CHAT</button>
                </form>
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">NEW GROUP</button>
                </form>


                <ul className="navbar nav navbar-pull-right">
                    <li><a href="" data-placement="bottom" data-toggle="tooltip" data-original-title="Profilename">Bright Mabuza</a>
                    </li>            
                </ul>

              </div>
            </nav>
              <div style={{ width: 270,height:700, backgroundColor: '#E91E63'}}> 
                  <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4'>       
                      <form className="form-inline my-2 my-lg-0">
                        <input className="my-4 " type="text" name="search" placeholder="Search.." style={{ borderRadius: 20, backgroundColor: ''}}/>
                      </form>
                  </SideNav>
              </div>
            </div>

             );
  }
}