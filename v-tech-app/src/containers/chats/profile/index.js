import React from 'react'
import { connect } from 'react-redux'
import './profile.css'
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
						<input className="prfl_username" id="Username" placeHolder={this.props.name} />
				

					</div>
		 </div>			
		
		<div className="row">	
					<div className="col">
						<input className="prfl_email" id="email" placeHolder={this.props.email} />
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
const mapStateToProps = state => ({
  name: state.userregisterreducer.name,
  email: state.userregisterreducer.email,
})

export default connect(
  mapStateToProps, 
  null
)(Profile)
