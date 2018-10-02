import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div class="projects-wrapper">
        <div class="projects" id="one">
          <p>
            <a href="https://brooklynbodega.github.io/Project-01/">
              <img src={ require("../images/project-1-photo-00.png")} alt="project-1"/>
              <div class="description">
              <h2>Cell Match</h2>
                <p>A color-matching tile game that cycles through various colors within a set timeframe with increasing difficulty. Written in Javascript with transitions used from Animista.net.
                </p>
              </div>
            </a>
          </p>
        </div>
        <div class="projects" id="two">
          <p>
            <a href="https://project-2-volunteer.herokuapp.com/">
              <img src={require("../images/project-2-photo-00.png")} alt="project-2"/>
              <div class="description">
                <h2>CommunityCares</h2>
                  <p>A CRUD app developed with Express and Node.js that allows users to create and share volunteer projects.
                  </p>
              </div>
            </a>
          </p>
        </div>
        <div class="projects" id="three">
          <p>
            <a href="https://lovo.netlify.com/">
              <img src={require("../images/project-4-photo-00.png")} alt="project-4"/>
              <div class="description">
                <h2>LoVo</h2>
                  <p>A user-facing database to assist citizens in finding information on their direct representatives at all government levels using the ProPublica API, Google Civic API, and React.
                  </p>
              </div>
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Projects;