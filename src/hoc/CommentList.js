import React, { Component } from "react";

// SUPPOSE DATA IS SOME EXTERNAL SOURCE WHICH GIVES US DATA.
let DataSource;

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Listen to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Remove the listeneer
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange = () => {
    // Update state when data changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    const mappedComments = this.state.comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ));
    return (
      <div>
        {mappedComments}
      </div>
    );
  }
}

export default CommentList;