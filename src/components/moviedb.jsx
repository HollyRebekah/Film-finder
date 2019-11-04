import React from 'react';
import axios from 'axios';
import SaveButton from './saveButton';
import SearchButton from './searchButton';
import DropdownButton from './dropdown-button';
import He from 'he';
import '../styles/moviedb.css';


class Moviedb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      pastMovies: props.user.filmsWatched,
      currentMovie: null,
      image: null,
      synopsis: null,
    };
    this.getData = this.getData.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
  }


  getData(event) {
    console.log(event.target.value);
    axios.post('http://localhost:8080/filmfinder/movies/genre', {
      genre: event.target.value,
    }).then(response => {
      console.log(response);
      const movieData = response.data;
      console.log(movieData);
      this.setState({ movieList: movieData });
      this.pickMovie();
    });
  }

  pickMovie() {
    const randomNumber = [Math.round(Math.random() * (this.state.movieList.length))];
    const randomMovie = this.state.movieList[randomNumber];
    const check = this.state.pastMovies.includes(randomMovie.title);
    if (!check) {
      this.setState({ currentMovie: He.decode(randomMovie.title) });
      this.setState({ image: randomMovie.image });
      this.setState({ synopsis: He.decode(randomMovie.synopsis) });
    } else {
      this.pickMovie();
    }
  }

  saveMovie() {
    const index = this.state.movieList.findIndex(x => x === (this.state.currentMovie));
    this.state.movieList.splice(index, 1);
    axios.post('http://localhost:8080/filmfinder/users/movie', {
      email: this.props.user.email,
      movie: this.state.currentMovie,
    });
  }

  render() {
    return (
      <div className="movie-page">
        <DropdownButton onClick={this.getData} />
        {this.state.currentMovie && (
        <div className="movie-info">
          <img src={this.state.image} alt={`movie-poster-for${this.state.currentMovie}`} />
          <div className="buttons">
            <SearchButton onClick={this.pickMovie} />
            <div className="divider" />
            <SaveButton onClick={this.saveMovie} />
          </div>
          <div className="title">
            <h2>{this.state.currentMovie}</h2>
          </div>
          <div className="synopsis">{this.state.synopsis}</div>
        </div>
        )}
      </div>
    );
  }
}

export default Moviedb;
