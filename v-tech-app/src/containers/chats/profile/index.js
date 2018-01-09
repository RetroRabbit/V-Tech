import React from 'react';
import './profile.css';
import AppHeader from '../header'


class Profile extends React.Component {
  render() {
    return (

			<div class="head_space">
				<AppHeader /> 
			
	<div class="profile_form_area">
	
    <div className="App">
      <img src={require("./kitten.jpg")} alt={"ChatterBox logo"} class="user_pic" />

        <form>
          <div className="row">
					<div className="col">
						<input className="prfl_username" id="Username" placeHolder="LUFFY.D MONKEY" />
				

					</div>
		 </div>			
		
		<div className="row">	
					<div className="col">
						<input className="prfl_email" id="email" placeHolder="Luffy@gmail.com" />
					</div>
				
		</div>	
		
		
          <button type="submit" id="prfl_login" className="btn btn_submit" >DONE</button>
		
        </form>
     </div>  
		
  </div>
	</div>
	);
}
}

export default Profile;
