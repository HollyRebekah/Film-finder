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
    const { firstName } = this.props.user;
    const { images } = this.state;

    return (
      <div className="user-account">
        <h1>User: {firstName}</h1>
        <div>{firstName} has watched...</div>
        <div className="movie-list">
          {images.map((image, i) => {
            return (
              <li className="movie-image" key={`movie.${i}`}><img className="movie" alt="movie" src={image} /></li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserAccount;
