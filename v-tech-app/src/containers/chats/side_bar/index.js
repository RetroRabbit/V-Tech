import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import SideNav from 'react-sidenav';
import './index.css'
import { connect } from 'react-redux';

class AppSideBar extends React.Component {

  createChatListItems() {
    return this.props.chats.map((chat) => {
      return(
         
        <div class="chat">
        
          <h5 class="chat_friend_name"><img class="chat_user_pic" src={require("../profile/kitten.jpg")} alt={"Profile Pic"} ></img>Dummy Name</h5>
          <div class="lst_msg"><span key={chat.id} >{chat.last_message}</span>
          </div>
        </div>
      );
    });
  }

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
      <div class="container">
        <div class="row">
                <div class="side_bar"> 
                  <div class="search_bar">
                    <SideNav >       
                        <form className="form-inline">
                          <input class="form-control mr-sm-2 text_box search my-4" type="text" placeholder="Search Chats" />
                        </form>
                    </SideNav>
                  </div>

                  <div class="open_chats">
                      <div class="chat">
                        <h5 class="chat_friend_name"><img class="chat_user_pic" src={require("../profile/kitten.jpg")} alt={"Profile Pic"} ></img>Shingai Pedzisayi</h5>
                        <div class="lst_msg"><span>Hey, are free tomorrow evening? Was wondering if you'd be willing to teach me to cook...
                          no ulterior motive 0_0'...hehe</span>
                        </div>
                      </div>
                      <div class="chat">
                        <h5 class="chat_friend_name"><img class="chat_user_pic" src={require("../profile/kitten.jpg")} alt={"Profile Pic"}></img>Donald Bridle</h5>
                        <div class="lst_msg"><span>Is there still meat in the fridge?</span>
                        </div>
                      </div>
                      <div class="chat">
                        <h5 class="chat_friend_name"><img class="chat_user_pic" src={require("../profile/kitten.jpg")} alt={"Profile Pic"} ></img>John Snow</h5>
                        <div class="lst_msg"><span>Blah blah blah blah blah blah blah blah</span>
                        </div>
                      </div>

                      {this.createChatListItems()}
                      
                  </div>
                </div>     
          </div>
        </div>
             );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats, 
   users: state.users
  };
}

export default connect(mapStateToProps)(AppSideBar);