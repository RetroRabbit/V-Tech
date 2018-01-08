import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
	<div className="App">
		<h1>Profile</h1>
		    
			
			<img src={require("../profile/IMg.jpg")} alt={"ChatterBox logo"}  />
			<br />
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