import React, { Component } from "react";
import "../../styles/Specialties.css";
import aPlus from "../../styles/assets/Aplus.png";
import health from "../../styles/assets/health.png";
import web from "../../styles/assets/web.png";

class Specialties extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="specialties">
        <h1>Specialties:</h1>
        <hr></hr>
        <div>

          <div>
            <img src={aPlus} width="100" height="100"></img>
            <h2>IT</h2>
            <p>CompTIA A+ certified, currently studying for the CompTIA Network+</p>
          </div>
          <div>
            <img src={web} width="100" height="100"></img>
            <h2>Web Development</h2>
            <p>Experienced in creating Javascript-heavy sites that use React</p>
          </div>
          <div>
            <img src={health} width="100" height="100"></img>
            <h2>Health</h2>
            <p>
              B.S. in Exercise Science with experience working as an
              EMT
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Specialties;
