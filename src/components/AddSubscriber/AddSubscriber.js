import React, { Component } from "react";
import "./AddSubscriber.css";

class AddSubscriber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: ""
    };
    // this.inputRef = React.createRef();
  }
  onChangeHandler = event => {
    const p = event.target.value;
    // this.state.phoneNo = p   NEVER DO THIS
    console.log(p);
    this.setState({
      phoneNo: p
    });
  };
  onSubmitHandler = event => {
    event.preventDefault();
    this.props.addPhoneNo(this.state.phoneNo);
    // console.log(this.inputRef.current);
  };
  // componentDidMount(){
  //   this.inputRef.current.focus();
  // }
  render() {
    return (
      <div className="AddSubscriber__container">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter a phone number"
            className="AddSubscriber__input"
            onChange={this.onChangeHandler}
            // ref={this.inputRef}
          />
          <button className="AddSubscriber__btn">Add</button>
        </form>
      </div>
    );
  }
}

export default AddSubscriber;
