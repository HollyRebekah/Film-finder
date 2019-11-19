/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { IoMdClose } from 'react-icons/io';
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
        <div id="popup-header">
          <h1>What did you think of {this.props.text}?</h1>
          <div
            className="close-button"
            onClick={this.props.onClose}
          >
            <IoMdClose
              size={32}
            />
          </div>
        </div>
        <div className="comment-image">
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
