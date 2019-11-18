import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TokenManager from '../utils/token-manager';
import Button from './Button';
import '../styles/button.css';
import '../styles/sign-log.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin(event) {
    axios.post('https://netpix-api.herokuapp.com/filmfinder/auth', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        TokenManager.setToken(response.data);
        this.props.onLogin();
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ errorMessage: 'The email/ password combination is incorrect. Please try again.' });
      });
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Button
            onClick={this.handleLogin}
            className="movie-button"
            text="Login"
          /> or
          <Link
            className="signup-link"
            to="/sign-up"
          > Sign Up
          </Link>
        </div>
        {
          this.state.errorMessage &&
          <div>{this.state.errorMessage}</div>
        }
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
