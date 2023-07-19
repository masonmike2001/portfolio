import React, { Component } from "react";
import "../../styles/Projects.css";
import weatherApp from "../../styles/assets/Weatherapp.png";

class Projects extends Component {
  constructor() {
    super();
  }


  componentDidMount() {
    let i = 0
    let projectImgs = document.getElementsByClassName("project-img");
    console.log(projectImgs);

    for(i; i < projectImgs.length - 1; i++) {}
      projectImgs[i].addEventListener('click', this.onImageClick);
  }

    
  
  onImageClick = (e) => {
   console.log("hi");
   window.location = "https://masonmike2001.github.io/weather-app/";



    
  };


  render() {
    return (
      <div id="projects">

        <h1>Projects</h1>

        <div className="carousel">
          <div className="project-square">
          <h2>Weather App</h2>
            <img src={weatherApp} className="project-img"></img>
            <p>View the current weather, forecast, and barometric data around the world.</p>
        
          </div>
        </div>

      </div>
    );
  }
}


export default Projects;
