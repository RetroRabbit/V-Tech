import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
	<div className="App">
	 <div class="form_area">
		    <form>
				<br/>
				    <img src={require("../profile/index.jpg")} alt={"ChatterBox logo"} class="img-circle" />
				<br/>
				<br />
				 <div class="col-xs-2">
						<input className="" id="Username" placeHolder="LUFFY.D MONKEY" />
						<br/>
						<input className="" id="email" placeHolder="Luffy@gmail.com" /> 
				</div>			
				<div className="done"> 		
					<button class="btn btn-default" ><span class="glyphicon glyphicon-pencil"></span>Done</button>
				</div>	
		    </form>
	 </div>	
	</div>	
	);
}
}

export default App;
