import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div class="projects-wrapper">
        <div class="project-one">
          <p>
            <a href="https://brooklynbodega.github.io/Project-01/">
              Tile Matching
              {/* <img src="./images/project-1-photo-00.png" alt="project-1"> */}
            </a>
          </p>
        </div>
        <div class="project-two">
          <p>
            <a href="https://project-2-volunteer.herokuapp.com/">
              CommunityCares
              {/* <img src="./images/project-2-photo-00.png" alt="project-2"> */}
            </a>
          </p>
        </div>
        <div class="project-three">
          <p>
            <a href="https://lovo.netlify.com/">
              LoVo
                {/* <img src="./images/project-4-photo-00.png" alt="project-4"> */}
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Projects;