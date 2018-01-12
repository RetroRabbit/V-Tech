
import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
//import $ from 'jquery'
import './index.css';
import { bindActionCreators } from 'redux'
//import { MapStateToProps } from 'react-redux';
//import { MapDispatchToProps } from 'react-redux';
import { connect } from 'react-redux';
import { msg_successful } from '../../../modules/messages_reducer'
import { get_all_msgs } from '../../../modules/messages_reducer'

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


class AppChatArea extends React.Component {

    handleKeyPress = (event) => {
        if(event.key ==='Enter'){
        var text2 = document.getElementById('mytext').value;
            //this.state.a_msg = text2
            
            //var test = this.props.get_all_msgs()
            //alert(test)
            //var array = this.props.get_all_msgs()

            this.props.msg_successful(text2)
            //this.props.messages.map(all_msgs)
        }
        this.forceUpdate();

    }

    

    addMessage() {
        return this.props.msg_set.map((msg) => {
          return(
             
            <li >
                <div class="msj macro">
                    <div class="text text-l">
                        
                        <p key={msg.id}><font color="white">{msg.msg}</font></p>
                    </div>
                </div>
            </li>
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
    var myDiv = document.getElementsByClassName("msgs");
    myDiv.scrollTop = myDiv.scrollHeight;

    return (
        <div>
            <div className="col-lg-12  frame test">
                <ul class="msgs">
                    {this.addMessage()}
                </ul>
        
            </div>

            <div class="msj-rta1 macro msg_input">
                <button type="button" class="btn attachmentbtn">+</button>                      
                <div class="text text-r" style={{background: 'whitesmoke !important'}}>

                    <input class="mytext" id='mytext' onKeyPress={this.handleKeyPress.bind(this)} placeholder="Type a message"/>
                </div> 
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    msg_set: state.msgs.msg_set 
  })


const mapDispatchToProps = dispatch => bindActionCreators({
    msg_successful,
    get_all_msgs
  }, dispatch)


export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(AppChatArea)