import React, { Component } from "react";
import "../styles/Nav.css";
class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="nav-menu">
        <div className="badge">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/56095222?v=4"
          />
          <h1>Michael Mason</h1>
          <p id="headline">
            Let's bridge the gap between technology and health.
          </p>
        </div>
        <button>ABOUT</button>
        <button>SPECIALTIES</button>
        <button>PROJECTS</button>
        <button class="btn-blue">LINKEDIN</button>
        <button class="btn-bw">GITHUB</button>
      </div>
    );
  }
}
export default Nav;
