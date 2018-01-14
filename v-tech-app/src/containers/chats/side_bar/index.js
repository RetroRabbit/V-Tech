import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import SideNav from 'react-sidenav';
import './index.css'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { get_convo } from '../../../modules/chats_reducer';
//import { append_chat } from '../../../modules/chats_reducer'

/*function link_chat (){
  var elem = document.getElementById("pull_msg")
  var person_id = elem.className()
  get_convo(person_id);
}*/


class AppSideBar extends React.Component {

  link_chat = (event) => {
    var active_id = event.target.id;
    this.props.get_convo(active_id);
    
  }


  createChatListItems() {
    return this.props.friends.map((friend) => {
    
      return(   
        <div class="chat" >
        
          <h5 class="chat_friend_name" onClick={this.link_chat.bind(this)} id={friend.friend_id}><img class="chat_user_pic" src={require("../profile/kitten.jpg")} alt={"Profile Pic"} ></img>{friend.name}</h5>
          <div class="lst_msg"><span id="pull_msg" key={friend.friend_id}>{friend.last_msg}</span>
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
                      

                      {this.createChatListItems()}
                      
                  </div>
                </div>     
          </div>
        </div>
             );
  }
}

const mapStateToProps = state => ({
  friends: state.chats.friends,
  convo: state.chats.current_convo
})

const mapDispatchToProps = dispatch => bindActionCreators({
  get_convo,
}, dispatch)


/*export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AppChatArea)*/

/*function mapStateToProps(state) {
  return {
    chats: state.chats, 
   users: state.users
  };
}*/

export default connect(mapStateToProps,mapDispatchToProps)(AppSideBar);