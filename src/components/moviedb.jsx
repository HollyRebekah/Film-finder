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
    };
    this.getData = this.getData.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.setGenre = this.setGenre.bind(this);
  }


  getData(genre) {
    axios.get(`https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=0-!1900%2C2018-!0%2C5-!0%2C10-!${genre}-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=46&st=adv&ob=Relevance&p=1&sa=and`, {
      headers: {
        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
      },
    }).then(response => {
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
    this.setState({ movieList: null });
    this.getData(genre);
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
