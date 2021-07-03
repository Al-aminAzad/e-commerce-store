import React, { Component } from 'react';
import './signIn.style.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: [value] });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
