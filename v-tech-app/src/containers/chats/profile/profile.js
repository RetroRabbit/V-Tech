import React, { Component } from 'react';
import './profile.css';

class App extends Component {
  render() {
    return (
	<div className="App">
		<h1>Profile</h1>
        <br/>
        <img src={require("../profile/index.jpg")} alt={"ChatterBox logo"} class="img-circle" />
        <br />
        <div id="wrapper">
            <input className="my-4" id="Username" placeHolder="LUFFY.D MONKEY" icon=""/>
            <br/>
            <input className="my-4" id="email" placeHolder="Luffy@gmail.com" icon=""/>
            <br/>		
        </div>	
		<div className="done"> 		
			<button class="btn btn-default">Done</button>
		</div>	
	</div>	
	);
}
}

export default App;