import React, { Component } from "react";

// SUPPOSE DATA IS SOME EXTERNAL SOURCE WHICH GIVES US DATA.
let DataSource;

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange = () => {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

export default BlogPost;
