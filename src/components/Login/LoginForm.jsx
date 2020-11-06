import React from 'react';
import { reduxForm, Field } from 'redux-form';
import LoginControl from '../common/LoginControl/LoginControl';
import { requiredField } from '../../utils/Validations/validators';
import styles from '../common/FormControl/formControl.module.css';
import { createField } from './CreateField';
export const LoginReduxForm = reduxForm({
  //! a unique name for the form(униклано име за формата се дава )
  form: 'LoginToWebsite',
})(LoginForm);

function LoginForm({ handleSubmit, error }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {createField('Email', 'email', [requiredField], LoginControl)}
        {createField('Password', 'password', [requiredField], LoginControl, { type: 'password' })}
        {createField(
          null,
          'rememberMe',
          [requiredField],

          LoginControl,
          { type: 'checkbox' },
          'remember me',
        )}
        {/*Вместо да пишем толкова много повтарящсе код правим нов файл CreateField.js и после му предаваме атрибути в същия ред които сме ги подредили в новия файл*/}
        {/*<Field
            type='text'
            validate={[requiredField]}
            name='email'
            id=''
            placeholder={'Email'}
            component={LoginControl}
          />*/}
        {/*<div>
          <Field
            type='password'
            validate={[requiredField]}
            name={'password'}
            placeholder={'Password'}
            component={LoginControl}
          />
        </div>*/}
        {/*<div>
        <Field
          type='checkbox'
          validate={[requiredField]}
          name={'rememberMe'}
          id=''
          component={LoginControl}
        />
        remember me
      </div>*/}
        {error && <div className={styles.loginError}>{error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
