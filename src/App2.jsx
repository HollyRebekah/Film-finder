/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import DataButton from './components/databutton';

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
    this.getData = this.getData.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  getData() {
    axios.get('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=0-!1900%2C2019-!0%2C5-!0%2C10-!6839-!Series-!Any-!Any-!gt1-!%7Bdownloadable%7D&t=ns&cl=46&st=adv&ob=Title&p=2&sa=and', {
      headers: {
        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e53590f299mshe3f80deda898096p1fedcejsn9038057e8d3c',
      },
    }).then(response => {
      const movieData = response.data.ITEMS;
      this.setState({ movie: movieData });
      console.log(movieData);
      this.sendData();
    });
  }

  sendData() {
    const blah = this.state.movie;
    blah.forEach((x) => axios.post('http://localhost:8080/filmfinder/movies', {
      title: x.title,
      image: x.image,
      synopsis: x.synopsis,
      rating: x.rating,
      runtime: x.runtime,
      genre: 'TVdocumentary',
    }));
  }

  handleButton() {
    this.getData();
  }

  render() {
    return (
      <div>
        <DataButton
          onClick={this.handleButton}
        />
      </div>
    );
  }
}

export default App2;
