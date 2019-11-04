import React from 'react';
import Axios from 'axios';

class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      errors: {},
    };
  }

  handleCreateUser = (event) => {
    console.log('Hello');
    Axios.post('http://localhost:8080/filmfinder/users', {
      withCredentials: true,
      firstName: this.state.fields.firstName,
      lastName: this.state.fields.lastName,
      email: this.state.fields.email,
      password: this.state.fields.password,
    })
      .then(() => {
        this.props.history.push('/login');
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
              type="password"
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
