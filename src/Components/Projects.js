import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects-Wrapper slide-in-blurred-left">
        <div className="projects" id="project-one">
          <img className="project-image" id="proj-img-one" src={ require("../images/project-1-photo-03.png")} alt="project-1"/>
          <div className="description">
          <div className="link-text">
            <p className="link-title">Cell Match</p>
            <p className="link-desc">A color-matching tile game that cycles through various colors within a set timeframe with increasing difficulty. Written in Javascript with transitions used from Animista.net.
            </p>
            </div>
            <div className="project-link">
              <a href="https://brooklynbodega.github.io/Project-01/">
                VISIT
              </a>
            </div>
          </div>
        </div>
        <div className="projects" id="project-two">
          <img className="project-image" id="proj-img-two" src={require("../images/project-2-photo-00.png")} alt="project-2"/>
          <div className="description">
          <div className="link-text">
            <p className="link-title">CommunityCares</p>
            <p className="link-desc">A CRUD app developed with Express and Node.js that allows users to create and share volunteer projects.
            </p>
            </div>
            <div className="project-link">
              <a href="https://project-2-volunteer.herokuapp.com/">
                VISIT
              </a>
            </div>
          </div>
        </div>
        <div className="projects" id="project-three">
          <img className="project-image" id="proj-img-three" src={require("../images/project-4-photo-00.png")} alt="project-4"/>
          <div className="description">
          <div className="link-text">
            <p className="link-title">LoVo</p>
            <p className="link-desc">A user-facing database to assist citizens in finding information on their direct representatives at all government levels using the ProPublica API, Google Civic API, and React.
            </p>
            </div>
            <div className="project-link">
              <a href="https://lovo.netlify.com/">
                VISIT
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;