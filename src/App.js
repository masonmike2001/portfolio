import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "home",
    };
  }
  render() {
    return (
      <div id="app">
        <Nav />
        <Main />
        <footer></footer>
      </div>
    );
  }
}

export default App;
