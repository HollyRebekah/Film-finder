import React from 'react';
import Axios from 'axios';
import TokenManager from '../utils/token-manager';

class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      errors: null,
    };
  }

  handleCreateUser = (event) => {
    Axios.post('http://localhost:8080/filmfinder/users', {
      withCredentials: true,
      firstName: this.state.fields.firstName,
      lastName: this.state.fields.lastName,
      email: this.state.fields.email,
      password: this.state.fields.password,
    })
      .then(res => {
        console.log(res);
        return Axios.post('http://localhost:8080/filmfinder/auth', {
          email: res.data.email,
          password: this.state.fields.password,
        })
          .then((response) => {
            TokenManager.setToken(response.data);
            this.props.onSignup();
            this.props.history.push('/');
          })
          .catch((error) => {
            this.setState({ errors: error.response.data.message });
          });
      });
    event.preventDefault();
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: { ...this.state.fields, [event.target.name]: event.target.value },
    });
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <div className="first-name">
            First Name: <input
              name="firstName"
              placeholder="First Name"
              value={this.state.fields.firstName}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="last-name">
            Last Name: <input
              name="lastName"
              placeholder="Last Name"
              value={this.state.fields.lastName}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="email">
            Email: <input
              name="email"
              placeholder="Email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="password">
            Password: <input
              name="password"
              placeholder="Password"
              value={this.state.fields.password}
              onChange={this.handleFieldChange}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleCreateUser}
          >
            <label>Sign Up</label>
          </button>
        </form>
      </div>
    );
  }
}

export default signUp;
