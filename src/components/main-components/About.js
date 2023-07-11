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
        <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/56095222?v=4"
        />
        <h1>
          Hello, World. My name is <b>Michael.</b>
        </h1>
        <p>
          Ever since I booted up my first computer as a kid, I've loved learning
          about anything and everything technology-related. I develop sites and
          apps in my spare time, and am experienced with
          <b> Javascript</b> and <b>ReactJS</b>.
        </p>
        <p>
          In the summer of 2023, I received my <b>CompTIA A+ certification</b>.
          With it, I've learned about many of the components that make the web work. I'm currently studying for the <b>CompTIA Network+</b> certification, and I tinker with network creation and Active Domain systems in my free time using virtual machines. In the near feature, I hope to learn about cybersecurity and threat management.
        </p>
        <p>
          Feel free to browse my <b>GitHub</b>, and connect with me on <b>LinkedIn</b>. I look forward to working with you.
        </p>
        {/* <img id="scroll" src={scroll}></img> */}
      </div>
    );
  }
}
export default About;
