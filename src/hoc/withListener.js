import React, { Component } from "react";
let DataSource;

function withListener(WrappedComponent, selectData) {
  // takes a component as input and returns another one
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // take care of listener
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // takes care of remove listener
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    };

    render() {
      // render the component passed with new data
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export default withListener;
