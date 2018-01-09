import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import AppHeader from './header'
import AppSideBar from './side_bar'
import AppChatArea from './chat_area'
import './css_chats/main_chat.css'

export default class AppChat extends React.Component {
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
      <div class="chats_contain">
            <div >
                    <div className="col-lg-12">
                            <AppHeader/>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 px-1">
                            <AppSideBar/>
                        </div>
                        <div className="col-lg-8 ">
                            <AppChatArea/>
                        </div>
                    </div>      
            </div>
      </div>
        );
    }
}