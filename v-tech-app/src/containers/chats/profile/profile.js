import React, { Component } from 'react';
import './login.css';

class profile extends React.Component {
  render() {
    return (
	<div class="form_area">
    <div className="App">
      <img src={require("../src/index.jpg")} alt={"ChatterBox logo"} class="img-circle" />
	  <br/>
	  <br/>
        <form>
          <div className="row">
					<div className="col">
						<input className="" id="Username" placeHolder="LUFFY.D MONKEY" />
					</div>
					<div className="col">
						<span class="glyphicon glyphicon-pencil"></span>
					</div>
		 </div>			
		
		<div className="row">	
					<div className="col">
						<input className="" id="email" placeHolder="Luffy@gmail.com" />
					</div>
					<div className="col">
						<span class="glyphicon glyphicon-pencil"  ></span>
					</div>
		</div>	
		
		
          <button type="submit" id="login" className="btn" >DONE</button>
		
        </form>
     </div>  
		
  </div>
	
	);
}
}

export default profile;
