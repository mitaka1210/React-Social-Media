import React from 'react';
import { connect } from 'react-redux';
import { LoginReduxForm } from './LoginForm';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
function Login(props) {
  //? Това което сме написали като потребител(user) и (password) ще се покаже в конзолата на браузера.
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>

  );
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {
  login,
})(Login);
