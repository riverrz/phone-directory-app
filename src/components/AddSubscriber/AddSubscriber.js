import React, { Component } from "react";
import "./AddSubscriber.css";

class AddSubscriber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: ""
    };
  }
  onChangeHandler = event => {
    const p = event.target.value;
    console.log(p);
    this.setState({
      phoneNo: p
    });
  };
  onSubmitHandler = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="AddSubscriber__container">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter a phone number"
            className="AddSubscriber__input"
            onChange={this.onChangeHandler}
          />
          <button className="AddSubscriber__btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddSubscriber;
