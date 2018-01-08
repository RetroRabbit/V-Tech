import React, { Component } from 'react'
//import { Route, Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, Input, Button, Container } from 'reactstrap'

import './chatarea.css'

const App = () => (  
    <div>
        <ChatArea/>
        <MessageArea/> 
    </div>

)

class MessageArea extends Component {
    render() {
        return (
            <div className="WrittingArea">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8 }}>
                            <Form>
                                <Button className="attachmentbtn my-2" size="lg">+</Button>
                                    <FormGroup>
                                        <Input type="text" name="message" id="exampleMsg" placeholder="Your message here" className="text_box"/>
                                    </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class ChatArea extends Component {
    render() {
        return (
            <div className="MessageArea">
            <Container>
                <Row>
                    <Col xs="6">
                        <Row>
                            <p class="msg">
                                Hello
                            </p>
                        </Row>
                        <Row>13:05</Row>
                    </Col>
                </Row>
            </Container>
            </div> 
        )
    }
}
export default App