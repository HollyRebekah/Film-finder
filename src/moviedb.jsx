/* eslint-disable react/jsx-key */
import React from 'react';
import axios from 'axios';
import SearchButton from './searchButton';

class Moviedb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      pastMovies: [],
      currentMovie: null,
      image: null,
      error: false,
    };
    this.getData = this.getData.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.pickMovie = this.pickMovie.bind(this);
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
    if (this.state.currentMovie) {
      this.setState({ pastMovies: this.state.currentMovie });
      let randNumber = [Math.round(Math.random() * 700)];
      const randomMovie = this.state.movieList[randNumber];
      this.setState({ currentMovie: randomMovie.title });
      this.setState({ image: randomMovie.image });
    } else {
      let randNumber = [Math.round(Math.random() * 700)];
      const randomMovie = this.state.movieList[randNumber];
      this.setState({ currentMovie: randomMovie.title });
      this.setState({ image: randomMovie.image });
    }
  }

  componentDidMount() {
    this.getData();
  }

  handleSearchButton() {
    this.pickMovie();
  }

  render() {
    return (
      <div>
        <SearchButton
          onClick={this.handleSearchButton}
        />
        <img src={this.state.image} />
        <div>
          {this.state.currentMovie}
        </div>
      </div>
    );
  }
}

export default Moviedb;
