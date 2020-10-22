import React from 'react';
import { reduxForm, Field } from 'redux-form';
import LoginControl from '../common/LoginControl/LoginControl';
import { requiredField } from '../../utils/Validations/validators';

export const LoginReduxForm = reduxForm({
  //! a unique name for the form(униклано име за формата се дава )
  form: 'LoginToWebsite',
})(LoginForm);

function LoginForm(props) {
  return (
    <div>
      <form action='' onSubmit={props.handleSubmit}>
        <div>
          <Field
            type='text'
            validate={requiredField}
            name='email'
            id=''
            placeholder={'Email'}
            component={LoginControl}
          />
        </div>
        <div>
          <Field
            type='password'
            validate={requiredField}
            name={'password'}
            placeholder={'Password'}
            component={LoginControl}
          />
        </div>
        <div>
          <Field
            type='checkbox'
            validate={requiredField}
            name={'rememberMe'}
            id=''
            component={LoginControl}
          />{' '}
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
