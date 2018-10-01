import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div class="projects-wrapper">
        <div class="projects" id="one">
          <p>
            <a href="https://brooklynbodega.github.io/Project-01/">
              <p>Cell Match</p>
              <img src={ require("../images/project-1-photo-00.png")} alt="project-1"/>
            </a>
          </p>
        </div>
        <div class="projects" id="two">
          <p>
            <a href="https://project-2-volunteer.herokuapp.com/">
              <p>CommunityCares</p>
              <img src={require("../images/project-2-photo-00.png")} alt="project-2"/>
            </a>
          </p>
        </div>
        <div class="projects" id="three">
          <p>
            <a href="https://lovo.netlify.com/">
              <p>LoVo</p>
                <img src={require("../images/project-4-photo-00.png")} alt="project-4"/>
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Projects;