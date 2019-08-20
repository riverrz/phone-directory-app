import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddSubscriber from "./components/AddSubscriber/AddSubscriber";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNoArray: [123, 2345, 3566, 4789, 5456]
    };
  }
  render() {
    const mappedPhoneNo = this.state.phoneNoArray.map(function(p, i) {
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
        <AddSubscriber />
        <main>
          <ul>{mappedPhoneNo}</ul>
        </main>
        <footer className="App__footer">Upgrad App</footer>
      </div>
    );
  }
}

export default App;
