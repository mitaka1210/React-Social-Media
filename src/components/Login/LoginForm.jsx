import React from 'react'
import {reduxForm} from 'redux-form';

function Form() {
	const LoginReduxForm = reduxForm({
		// a unique name for the form
		form: 'contact'
	 })(LoginReduxForm);
	 
	return (
		<div>
			<form action="">
				<div>
					<input type="text" name="" id="" placeholder={'login'}/>
				</div>
				<div>
					<input type="text" placeholder={'Password'}/>
				</div>
				<div>
					<input placeholder={'checkbox'}/> remember me
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
}

export default Form
