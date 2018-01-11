
import React from 'react';
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
//import $ from 'jquery'
import './index.css';
//import { connect } from 'react-redux';



/*
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            
*/



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


const handleKeyPress = (event) => {
    if(event.key ==='Enter'){
    var text2 = document.getElementById('mytext').value;
    
        alert(text2)
    }
}




export default class AppChatArea extends React.Component {
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

                </ul>
        
            </div>

            <div class="msj-rta1 macro msg_input">
                <button type="button" class="btn attachmentbtn">+</button>                      
                <div class="text text-r" style={{background: 'whitesmoke !important'}}>

                    <input class="mytext" id='mytext' onKeyPress={handleKeyPress} placeholder="Type a message"/>
                </div> 
            </div>
        </div>
        );
    }
}

