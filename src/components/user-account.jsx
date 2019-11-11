import React from 'react';
import axios from 'axios';
import '../styles/user-account.css';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/filmfinder/users/${this.props.user.email}`)
      .then((response) => {
        return axios.post(
          'http://localhost:8080/filmfinder/movies/image',
          { title: response.data.filmsWatched }
        );
      }).then(response => {
        this.setState({
          images: response.data,
        });
      });
  }

  render() {
    return (
      <div className="user-account">
        <h1>User: {this.props.user.firstName}</h1>
        <div>{this.props.user.firstName} has watched...</div>
        <div className="movie-list">
          {this.state.images.map((image) => {
            return (
              <li className="movie-image" key={this.state.images.indexOf(image)}><img className="movie" alt="movie" src={image} /></li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserAccount;
