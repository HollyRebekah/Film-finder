import React from 'react';
import axios from 'axios';
import SearchButton from './searchButton';
import SaveButton from './saveButton';
import Axios from 'axios';

class Moviedb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      pastMovies: props.user.filmsWatched,
      currentMovie: null,
      image: null,
    };
    this.getData = this.getData.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
  }

  getData() {
    Promise.all([
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=2&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=3&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=4&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=5&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=6&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
      axios.get('https://unogs-unos-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew100-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt10-!%100Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=7&sa=and', {
        headers: {
          'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
          'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
        },
      }),
    ]).then(allResponses => {
      const response1 = allResponses[0].data.ITEMS;
      const response2 = allResponses[1].data.ITEMS;
      const response3 = allResponses[2].data.ITEMS;
      const response4 = allResponses[3].data.ITEMS;
      const response5 = allResponses[4].data.ITEMS;
      const response6 = allResponses[5].data.ITEMS;
      const response7 = allResponses[6].data.ITEMS;
      const movieData = response1.concat(response2, response3, response4, response5, response6, response7);
      this.setState({ movieList: movieData });
      console.log(movieData);
    });
  }

  pickMovie() {
    const randomNumber = [Math.round(Math.random() * (this.state.movieList.length))];
    const randomMovie = this.state.movieList[randomNumber];
    const check = this.state.pastMovies.includes(randomMovie.title);
    if (!check) {
      this.setState({ currentMovie: randomMovie.title });
      this.setState({ image: randomMovie.image });
    } else {
      this.pickMovie();
    }
  }

  saveMovie() {
    const index = this.state.movieList.findIndex(x => x === (this.state.currentMovie));
    this.state.movieList.splice(index, 1);
    Axios.post('http://localhost:8080/filmfinder/user/movie', {
      email: this.props.user.email,
      movie: this.state.currentMovie,
    });
    console.log(this.state.movieList);
    console.log(this.state.pastMovies);
  }

  componentDidMount() {
    this.getData();
  }

  handleSearchButton() {
    this.pickMovie();
  }

  handleSaveButton() {
    this.saveMovie();
  }

  render() {
    return (
      <div>
        <SearchButton
          onClick={this.handleSearchButton}
        />
        <SaveButton
          onClick={this.handleSaveButton}
        />
        <div className="image">
          <img src={this.state.image} alt="blah" />
        </div>
        <div>
          {this.state.currentMovie}
        </div>
      </div>
    );
  }
}

export default Moviedb;
