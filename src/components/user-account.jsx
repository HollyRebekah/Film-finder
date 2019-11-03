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
    axios.post(
      'http://localhost:8080/filmfinder/movies/image',
      { title: this.props.user.filmsWatched }
    ).then(response => {
      this.setState({
        images: response.data,
      });
    });
  }

  render() {
    return (
      <div className="user-account">
        <h1>User: {this.props.user.firstName} {this.props.user.lastName}</h1>
        <div>{this.props.user.firstName} has watched...</div>
        <div className="movie-list">
          {this.state.images.map((image) => {
            return (
              <li className="movie-images" key={this.state.images.indexOf(image)}><img className="movie" alt="movie" src={image} /></li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserAccount;
