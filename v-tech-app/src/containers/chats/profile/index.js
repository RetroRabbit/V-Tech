import React from 'react'
import './profile.css'
import { connect } from 'react-redux'
import AppHeader from '../header'

class Profile extends React.Component {


	constructor(props) {
    super(props);
    this.state = {
          file: '',
          imagePreviewUrl: require("./kitten.jpg")
        };

    this._handleImageChange = this._handleImageChange.bind(this);
  }
 
  _handleImageChange(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
       file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} class="user_pic"/>);
    }
    else {
       $imagePreview =   (<img src={require("./kitten.jpg")} alt={"ChatterBox logo"} class="user_pic" />); 
    }
    return (

			<div class="head_space">
				<AppHeader /> 
			
	<div class="profile_form_area">

    <div className="App image_upload">
		
		<label for="file-input" > {$imagePreview}
    </label>

			 <input id="file-input" type="file" onChange={this._handleImageChange} />

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
      {this.changeImg}
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