/* eslint-disable react/jsx-key */
import React from 'react';
import axios from 'axios';

class Moviedb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: false,
    };
  }

  componentDidMount() {
    axios.get('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=60029591', {
      headers: {
        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
      },
    })
      .then(res => {
        const movies = res.data.RESULT.nfinfo.title;
        this.setState({ movies });
        console.log(this.state.movies);
      })
      .catch(() => this.setState({
        error: true,
      }));
  }

  render() {
    return (
      <div>
        {this.state.movies}
      </div>
    );
  }
}

export default Moviedb;
