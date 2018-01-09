import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import SideNav from 'react-sidenav';
import './index.css'

export default class AppSideBar extends React.Component {
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