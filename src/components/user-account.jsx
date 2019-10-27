import React from 'react';

const UserAccount = (props) => {
  return (
    <div className="user-info-page">
      <h1>User Info</h1>
      <div>Name: {props.user.firstName} {props.user.lastName}</div>
      <div>Movies I've Watched:{props.user.filmsWatched.map((movie) => {
        return (
          <li key={props.user.filmsWatched.indexOf(movie)}>{movie}</li>
        );
      })}
      </div>
    </div>
  );
};

export default UserAccount;
