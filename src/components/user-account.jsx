import React from 'react';
import '../styles/user-account.css';

const UserAccount = (props) => {
  return (
    <div className="user-info-page">
      <h1>User Info</h1>
      <div>Name: {props.user.firstName} {props.user.lastName}</div>
      <div>Movies I've Watched:{props.user.filmImages.map((image) => {
        return (
          <li className="movie-list" key={props.user.filmImages.indexOf(image)}><img className="movie" alt="movie" src={image} /></li>
        );
      })}
      </div>
    </div>
  );
};

export default UserAccount;
