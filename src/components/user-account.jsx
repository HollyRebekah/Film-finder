import React from 'react';

const UserAccount = (props) => {
  return (
    <div className="user-info-page">
      <h1>User Info</h1>
      <div>Name: {props.user.firstName} {props.user.lastName}</div>
      <div>Movies I've Watched:{props.user.filmImages.map((image) => {
        return (
          <li key={props.user.filmImages.indexOf(image)}><img src={image} /></li>
        );
      })}
      </div>
    </div>
  );
};

export default UserAccount;
