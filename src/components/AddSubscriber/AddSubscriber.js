import React, { Component } from "react";
import "./AddSubscriber.css";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

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
    // setTimeout(() => {
    //   // event  NOT AVAIALABLE
    //   // use the p variable instead of directly using event.target.value
    // }, 1000);
    // this.state.phoneNo = p   NEVER DO THIS
    console.log(p);
    this.setState({
      phoneNo: p
    });
  };
  onClickHandler = event => {
    this.props.addPhoneNo(this.state.phoneNo);
    // console.log(this.inputRef.current);
  };
  // componentDidMount(){
  //   this.inputRef.current.focus();
  // }
  render() {
    return (
      // <div className="AddSubscriber__container">
      //   <input
      //     type="text"
      //     placeholder="Enter a phone number"
      //     className="AddSubscriber__input"
      //     onChange={this.onChangeHandler}
      //     // ref={this.inputRef}
      //   />
      //   <button className="AddSubscriber__btn" onClick={this.onClickHandler}>Add</button>
      // </div>
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              placeholder="Enter a phone number"
              onChange={this.onChangeHandler}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={this.onClickHandler}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AddSubscriber;
