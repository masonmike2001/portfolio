import React, { Component } from "react";
import "../../styles/About.css";
import scroll from "../../styles/assets/scroll.svg";

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="about">
        <h1>About Me:</h1>
        <hr></hr>
        <pre>
          <code>~ % Hello, World. </code>
        </pre>
        <p>
          My name is <b>Michael.</b>
        </p>
        <p>
          Ever since I booted up my first computer in 2006 I've loved learning
          about anything and everything technology-related. I develop sites and
          apps in my spare time, and am well experienced with
          <b> Javascript</b> and <b>ReactJS</b>.
        </p>
        <p>
          In the summer of 2023, I received my <b>CompTIA A+ certification</b>.
          With it, I've garnered a better understanding of all the components
          involved in making the web work.
        </p>
        <p>
          With experiences in the medical field, both as an EMT and through the
          study of Clinical Exercise Science, it brings me great joy to use my
          love for technology to help others of all types of backgrounds live
          happier lives.
        </p>
        <img id="scroll" src={scroll}></img>
      </div>
    );
  }
}
export default About;
