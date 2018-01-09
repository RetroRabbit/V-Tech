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
                <div class="side_bar"> 
                  <div class="search_bar">
                    <SideNav >       
                        <form className="form-inline side_section">
                          <input class="form-control mr-sm-2 text_box search my-4" type="text" placeholder="Search Chats" />
                        </form>
                    </SideNav>
            
                  </div>
                </div>
                

             );
  }
}