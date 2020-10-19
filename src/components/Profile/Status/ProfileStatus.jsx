import React, { Component } from 'react'
import styles from '../ProfileInfo/profileinfo.module.css';

 
 export class ProfileStatus extends Component {
	 state= {
		 editMode: false
	 }

	 activateEditMode = () => {
		 console.log(this.state.editMode) //!  editMode === FALSE
		 this.setState(
			 {
				editMode: true
			 }
		 )
		 console.log(this.state.editMode) //! editMode  === FALSE
		
	 }
	 deactivateEditMode = () => {
		 console.log(this.state.editMode) //!  editMode === FALSE
		 this.setState(
			 {
				editMode: false
			 }
		 )
		 console.log(this.state.editMode) //! editMode  === FALSE
		
	 }
	 render() {
	
		 return (
			 <div>
				 {!this.state.editMode &&
				 <div><span onClick={this.activateEditMode}>{this.props.status}</span></div>
	 				}
					 {this.state.editMode &&
				 <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} /></div>
					 }
			 </div>
		 )
	 }
 };
 
 export default ProfileStatus;
