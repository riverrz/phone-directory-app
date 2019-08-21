import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddSubscriber from "./components/AddSubscriber/AddSubscriber";
import "./App.css";
import {Switch,Route, Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNoArray: [123, 2345, 3566, 4789, 5456]
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
  }
  componentWillUpdate(){
    console.log("Will Update App.js");
  }
  componentDidUpdate(){
    console.log("Did Update App.js");
  }
  render() {
    const mappedPhoneNo = this.state.phoneNoArray.map((p, i) => {
      return (
        <li key={i}>
          {p}
          <button>Delete</button>
        </li>
      );
    });
    return (
      <div>
        <Header title="Phone Directory App" />
        <Switch>
          <Route path="/add-subscriber" exact component={AddSubscriber} />
        </Switch>
        {/* <AddSubscriber addPhoneNo={this.addPhoneNo} /> */}
        <Link to="/add-subscriber">Go to Add Subscriber Page</Link>
        <main>
          <ul>{mappedPhoneNo}</ul>
        </main>
        <footer className="App__footer">Upgrad App</footer>
      </div>
    );
  }
}

export default App;
