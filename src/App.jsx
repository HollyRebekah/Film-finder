import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Moviedb from './components/moviedb';
import Login from './components/login';
import SignUp from './components/signup';
import NavBar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <NavBar />
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
            component={SignUp}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
