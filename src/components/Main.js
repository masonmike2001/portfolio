import React, { Component } from "react";
import "../styles/Main.css";
import About from "./main-components/About";
import Specialties from "./main-components/Specialties";
import Projects from "./main-components/Projects";

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="main-flow">
        <About />
        <Specialties />
        {/* <Projects /> */}
      </div>
    );
  }
}
export default Main;
