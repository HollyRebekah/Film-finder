import React from 'react';
import axios from 'axios';
import SaveButton from './saveButton';
import SearchButton from './searchButton';
import DropdownButton from './dropdown-button';

class Moviedb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      pastMovies: props.user.filmsWatched,
      currentMovie: null,
      image: null,
      synopsis: null,
      genre: null,
    };
    this.getData = this.getData.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.setGenre = this.setGenre.bind(this);
  }


  getData() {
    console.log(this.state.genre);
    axios.get('http://localhost:8080/filmfinder/movies', {
      genre: this.state.genre,
    }).then(response => {
      console.log(response);
      const movieData = response.data.ITEMS;
      this.setState({ movieList: movieData });
      console.log(movieData);
      this.pickMovie();
    });
  }

  pickMovie() {
    const randomNumber = [Math.round(Math.random() * (this.state.movieList.length))];
    const randomMovie = this.state.movieList[randomNumber];
    const check = this.state.pastMovies.includes(randomMovie.title);
    if (!check) {
      this.setState({ currentMovie: randomMovie.title });
      this.setState({ image: randomMovie.image });
      this.setState({ synopsis: randomMovie.synopsis });
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
      movieImage: this.state.image,
    });
    console.log(this.state.movieList);
    console.log(this.state.pastMovies);
  }

  handleSaveButton() {
    this.saveMovie();
  }

  setGenre(event) {
    const genre = event.target.value;
    console.log(genre);
    this.setState({ genre: genre });
    console.log(this.state.genre);
    this.setState({ movieList: null });
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <DropdownButton onClick={this.setGenre} />
        {this.state.currentMovie && (
        <div className="movie-info">
          <img src={this.state.image} alt={`movie-poster-for${this.state.currentMovie}`} />
          <br />
          <SearchButton onClick={this.pickMovie} />
          <SaveButton onClick={this.handleSaveButton} />
        </div>
        )}
        <div className="title">
          <h2>{this.state.currentMovie}</h2>
        </div>
        <div className="synopsis">{this.state.synopsis}</div>
      </div>
    );
  }
}

export default Moviedb;
