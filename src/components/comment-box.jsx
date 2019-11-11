/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/comment-box.css';

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
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.onClose}>close me</button>
          <form>
            <input type="text" onChange={this.handleChange} value={this.state.comment} />
          </form>
          <button type="submit" onClick={this.props.onSubmit} value={this.state.comment}>Post Your Thoughts</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
