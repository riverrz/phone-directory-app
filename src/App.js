import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddSubscriber from "./components/AddSubscriber/AddSubscriber";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import PhoneList from "./components/PhoneList/PhoneList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNoArray: []
    };
  }
  addPhoneNo = phoneNo => {
    // this.state.phoneNoArray.push(phoneNo) NEVER DO THIS
    const newPhoneNoArray = [...this.state.phoneNoArray];
    newPhoneNoArray.push(phoneNo);
    this.setState({
      phoneNoArray: newPhoneNoArray
    });
  };
  componentWillMount() {
    console.log("Will Mount App.js");
  }
  componentDidMount() {
    console.log("Did Mount App.js");
    fetch("http://localhost:5000/phone-numbers", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        const arr = data.phoneNoArray;
        this.setState({
          phoneNoArray: arr
        });
      });
  }
  componentWillUpdate() {
    console.log("Will Update App.js");
  }
  componentDidUpdate() {
    console.log("Did Update App.js");
  }
  render() {
    return (
      <div>
        <Header title="Phone Directory App" />
        <Switch>
          <Route
            path="/add-subscriber"
            exact
            render={() => <AddSubscriber addPhoneNo={this.addPhoneNo} />}
          />
          <Route
            path="/"
            render={() => <PhoneList phoneArray={this.state.phoneNoArray} />}
          />
        </Switch>
        {/* <AddSubscriber addPhoneNo={this.addPhoneNo} /> */}
        <Link to="/add-subscriber">Go to Add Subscriber Page</Link>
        <p>
          <Link to="/">Go to Phone List</Link>
        </p>
        {/* <main>
          <PhoneList phoneArray={this.state.phoneNoArray} />
        </main> */}
        <footer className="App__footer">Upgrad App</footer>
      </div>
    );
  }
}

export default App;
