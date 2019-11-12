import React from 'react';
import Axios from 'axios';
import Button from './Button';
import '../styles/button.css';
import '../styles/sign-log.css';

class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {},
    };
  }

  handleCreateUser = (event) => {
    Axios.post('http://localhost:8080/filmfinder/users', {
      withCredentials: true,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(() => {
        this.props.history.push('/login');
      });
    event.preventDefault();
  };

  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstName, lastName, email, password,
    } = this.state;

    return (
      <div className="login-form">
        <h1>Sign up</h1>
        <div className="first-name">
          <input
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="last-name">
          <input
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="email">
          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleFieldChange}
          />
        </div>
        <Button
          onClick={this.handleCreateUser}
          className="movie-button"
          text="Sign Up"
        />
      </div>
    );
  }
}

export default signUp;
