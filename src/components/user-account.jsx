import React from 'react';
import axios from 'axios';
import SavedMovie from './savedMovie';
import '../styles/user-account.css';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get(`https://netpix-api.herokuapp.com/filmfinder/users/${this.props.user.email}`)
      .then((response) => {
        console.log(response);
        return axios.post(
          'https://netpix-api.herokuapp.com/filmfinder/movies/image',
          { title: response.data.filmsWatched }
        );
      }).then(response => {
        console.log(response);
        this.setState({
          movies: response.data,
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
          {this.state.movies.map((movie) => {
            return (
              <SavedMovie className="movie-image" {...movie} key={movie._id} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserAccount;
