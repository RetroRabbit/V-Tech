
import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
//import $ from 'jquery'
import './index.css';
import { bindActionCreators } from 'redux'
//import { MapStateToProps } from 'react-redux';
//import { MapDispatchToProps } from 'react-redux';
import { connect } from 'react-redux';
//import { msg_successful } from '../../../modules/messages_reducer'
import { append_chat } from '../../../modules/chats_reducer'
import { get_all_msgs } from '../../../modules/messages_reducer'
import { chats_on_load } from '../../../modules/chats_reducer'

//-- No use time. It is a javaScript effect.



    /*
    if (who === "me"){
        
        control = '<li style="width:90%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img className="img-circle" style="width:20%;"  /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small><font color="white">'+date+'</font></small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:90%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small><font color="white">'+date+'</font></small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:20%;" /></div>' +                                
                  '</li>';
                }
                setTimeout(
                    function(){                        
                        $("ul").append(control);
            
                    }, time);
                
            }
            */
// eslint-disable-next-line 


/*window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true");
        alert("This works")
        window.location.reload();
        this.forceUpdate()
    }
}*/


class AppChatArea extends React.Component {

    handleKeyPress = (event) => {
        if(event.key ==='Enter'){
        var text2 = document.getElementById('mytext').value;
            //this.state.a_msg = text2
            
            //var test = this.props.get_all_msgs()
            //alert(test)
            //var array = this.props.get_all_msgs()

            this.props.append_chat(text2)

            //this.props.messages.map(all_msgs)
        }
        this.forceUpdate();
        

    }

    

    

    addMessage() {
        //return this.props.friends.map((friend) => {
            return this.props.open_chat.map((each_msg) => {
        
                return(
                
                
                <li class="msg_container">
                    <div class="msj macro li_msg">
                        <div class="text">
                            
                            <p><font color="white">{each_msg}</font></p>
                        </div>
                    </div>
                </li>
            
            );
            }
        
        );
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
    var myDiv = document.getElementsByClassName("msgs");
    myDiv.scrollTop = myDiv.scrollHeight;

    return (
        <div>
            <div className="col-lg-12  frame test">
                <ul class="msgs">
                    {this.addMessage()}
                </ul>
        
            </div>

            <button type="button" class="btn attachmentbtn">+</button> 
            <div class="msj-rta1 macro msg_input">
                                     
                <div class="text text-r" style={{background: 'whitesmoke !important'}}>

                    <input class="mytext" id='mytext' onKeyPress={this.handleKeyPress.bind(this)} placeholder="Type a message"/>
                </div> 
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    //msg_set: state.msgs.msg_set 
    //convo: state.chats.friends
    friends: state.chats.friends,
    test: state.chats,
    open_chat: state.chats.current_convo,
    times: state.chats.current_times
  })


const mapDispatchToProps = dispatch => bindActionCreators({
    //msg_successful,
    append_chat,
    get_all_msgs,
    chats_on_load
  }, dispatch)


export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(AppChatArea)