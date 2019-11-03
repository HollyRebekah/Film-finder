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
      console.log(response.data);
      this.setState({
        images: response.data,
      });
    });
  }

  render() {
    return (
      <div className="user-info-page">
        <h1>User Info</h1>
        <div>Name: {this.props.user.firstName} {this.props.user.lastName}</div>
        <div>Movies I've Watched:{this.state.images.map((image) => {
          return (
            <li className="movie-list" key={this.state.images.indexOf(image)}><img className="movie" alt="movie" src={image} /></li>
          );
        })}
        </div>
      </div>
    );
  }
}

export default UserAccount;
