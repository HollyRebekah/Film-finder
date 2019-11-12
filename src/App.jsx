import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Moviedb from './components/Moviedb';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import TokenManager from './utils/token-manager';
import UserAccount from './components/User-Account';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  handleLogin() {
    this.setState({ user: TokenManager.getTokenPayload() });
  }

  isLoggedIn() {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  }

  render() {
    return (
      <div className="app">
        <NavBar
          user={this.state.user}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (this.state.user ?
              <Moviedb {...props} user={this.state.user} /> :
              <Redirect to="/login" />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/sign-up"
            render={props => (
              <SignUp {...props} onSignUp={this.handleLogin} />
            )}
          />

          <Route
            exact
            path="/user-account"
            render={(props) => <UserAccount {...props} user={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
