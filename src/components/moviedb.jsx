import React from 'react';
import axios from 'axios';
import Button from './Button';
import DropdownButton from './dropdown-button';
import CommentBox from './comment-box';
import MovieInfo from './movie-info';
import He from 'he';
import Loader from 'react-loader-spinner';
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
      showPopup: false,
      loading: false,
    };
    this.getData = this.getData.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleSubmitNewComment = this.handleSubmitNewComment.bind(this);
  }

  handleSubmitNewComment = (event) => {
    console.log(this.state.currentMovie);
    axios.post('https://netpix-api.herokuapp.com/filmfinder/movies', {
      title: this.state.currentMovie,
      comment: event.target.value,
    })
      .then(response => {
        console.log(response);
      });
    this.closePopup();
  };

  togglePopup() {
    this.setState({
      showPopup: true,
    });
  }

  closePopup() {
    this.setState({
      showPopup: false,
    });
  }

  getData(event) {
    this.setState({
      loading: true,
      currentMovie: null,
    });
    axios.post('https://netpix-api.herokuapp.com/filmfinder/movies/genre', {
      genre: event.target.value,
    }).then(response => {
      const movieData = response.data;
      this.setState({
        movieList: movieData,
        currentMovie: null,
      });
      this.pickMovie();
    });
  }

  pickMovie() {
    const randomNumber = [Math.round(Math.random() * (this.state.movieList.length))];
    const randomMovie = this.state.movieList[randomNumber];
    const check = this.state.pastMovies.includes(randomMovie.title);
    if (!check) {
      this.setState({
        currentMovie: He.decode(randomMovie.title),
        image: randomMovie.image,
        synopsis: He.decode(randomMovie.synopsis),
        loading: false,
      });
    } else {
      this.pickMovie();
    }
  }

  saveMovie() {
    const index = this.state.movieList.findIndex(x => x === (this.state.currentMovie));
    const newList = this.state.movieList.splice(index, 1);
    this.setState({ movieList: newList });
    axios.post('https://netpix-api.herokuapp.com/filmfinder/users/movie', {
      email: this.props.user.email,
      movie: this.state.currentMovie,
    });
    this.togglePopup();
  }

  render() {
    const {
      loading, showPopup, currentMovie, image, synopsis,
    } = this.state;

    return (
      <div className="movie-page">
        <DropdownButton onClick={this.getData} />
        {loading && (
          <div className="center">
            <Loader
              type="TailSpin"
              color="#FFF"
              height={100}
              width={100}
            />
          </div>
        )}

        {showPopup ? (
          <CommentBox
            text={this.state.currentMovie}
            image={this.state.image}
            onClose={this.closePopup}
            onSubmit={this.handleSubmitNewComment}
          />
        ) : null
          }


        {currentMovie && (
        <div className="center">
          <MovieInfo
            image={image}
            title={currentMovie}
            synopsis={synopsis}
          />
          <div className="center">
            <Button
              onClick={this.pickMovie}
              text="Pick me a mother"
            />
            <Button
              onClick={this.saveMovie}
              text="I watched this!"
            />
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Moviedb;
