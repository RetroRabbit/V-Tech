import React, {Component} from 'react'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {FriendMail} from '../../reducers/userregisterreducer'

import './css_lgn3/new_chat.css'

class Lgn_three  extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {friendmail:""};
    this.registerfriendmail = this.registerfriendmail.bind(this);
    this.updateInputfriendmail = this.updateInputfriendmail.bind(this);
  }
  render() {
    return (
      <div class="contain">
      <div class="newc_form_area">
        <h4 id="stp_last">Last Step</h4>
        <h3 id="first_chat">YOUR FIRST CHAT</h3>

          <input type="email" class="form-control chat_email" id="email_add" placeholder="Friend's Email" onChange={this.updateInputfriendmail} value={this.state.friendmail}></input>

          <button id="new_chat_next" class="btn btn-primary" onClick={this.registerfriendmail}>NEXT STEP</button>
              <Link to="/chats"><p class="new_chat_skip">Skip for now</p></Link>
      </div>
      </div>
    )
  }

  registerfriendmail() {
    console.log(this.state);
    this.props.FriendMail(this.state.friendmail);
    this.props.changePage();
    this.setState({
      friendmail: ''
    });
  }
  updateInputfriendmail(event) {
    this.setState({
      friendmail: event.target.value
    });
  }
}

const mapStateToProps = state => ({
  friendmail: state.userregisterreducer.friendmail
})

const mapDispatchToProps = dispatch => bindActionCreators({
  FriendMail,
  changePage: () => push('/chats')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Lgn_three)

