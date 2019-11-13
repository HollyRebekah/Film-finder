import React from 'react';
import '../styles/movie-info.css';
import '../styles/moviedb.css';

const MovieInfo = (props) => {
  return (
    <div className="movie-info">
      <img
        src={props.image}
        alt={`movie-poster-for${props.title}`}
      />
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="synopsis">{props.synopsis}</div>
    </div>

  );
};

export default MovieInfo;
