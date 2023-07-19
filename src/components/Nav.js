import React, { Component } from "react";
import "../styles/Nav.css";
class Nav extends Component {
  constructor() {
    super();
  }

  linkHandler = (e) => {
    switch (e.target.textContent) {
      // case "ABOUT":
      //   window.location.href = "#about";
      //   break;

      // case "SPECIALTIES":
      //   window.location.href = "https://www.linkedin.com/in/masonmike2001/";
      //   break;
      // case "PROJECTS":
      //   window.location.href = "https://www.linkedin.com/in/masonmike2001/";
      //   break;
      case "LINKEDIN":
        window.location.href = "https://www.linkedin.com/in/masonmike2001/";
        break;
      case "GITHUB":
        window.location.href = "https://github.com/masonmike2001";
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div id="nav-menu">
        <div className="badge">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/56095222?v=4"
          />
          <h1>Michael Mason</h1>
        </div>
        <a href="#about">ABOUT</a>
        <a href="#specialties">SPECIALTIES</a>
        <a href="#projects">PROJECTS</a>
        <button className="btn-blue" onClick={this.linkHandler}>
          LINKEDIN
        </button>
        <button className="btn-bw" onClick={this.linkHandler}>
          GITHUB
        </button>
      </div>
    );
  }
}
export default Nav;
