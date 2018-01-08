import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './logo1.png';
import IMg from './IMg.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
	<div className="App">
		<h1>Profile</h1>
		    
		<img src={require("../IMg.png")} alt={"profile images"} />
		
			<input className="my-4" />
			<br/>
			<input className="my-4"/>
			<br/>		
		<div className="done"> 		
			<button class="btn btn-default">Done</button>
		</div>	
	</div>	
    );
}
}

export default App;