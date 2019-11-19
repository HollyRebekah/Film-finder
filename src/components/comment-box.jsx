/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/comment-box.css';
import '../styles/button.css';

class CommentBox extends React.Component {
  state = {
    comment: [],
  };

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    return (
      <div className="popup">
        <h1>What did you think of {this.props.text}?</h1>
        <button className="movie-button" onClick={this.props.onClose}>close me</button>
        <div>
          <img src={this.props.image} />
        </div>
        <input className="textBox" type="text" onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button className="movie-button" type="submit" onClick={this.props.onSubmit} value={this.state.comment}>Post Your Thoughts</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
