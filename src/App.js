import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello</h1>
        </header>
        <p className="App-intro">
          I'm Raúl Montero, & I'm a Web Developer.
        </p>
        <div class="work">
          <div class="project one">
            <h3>
              <a href="https://brooklynbodega.github.io/Project-01/">
              <p>Tile Matching</p>
              {/* <img src="./images/project-1-photo-00.png" alt="project-1"> */}
              </a>
           </h3>
          </div>
          <div class="project two">
            <h3>
              <a href="https://project-2-volunteer.herokuapp.com/">
                <p>CommunityCares</p>
                {/* <img src="./images/project-2-photo-00.png" alt="project-2"> */}
              </a>
            </h3>
          </div>
          <div class="project three">
            <h3>
              <a href="https://lovo.netlify.com/">
              <p>LoVo</p>
              {/* <img src="./images/project-4-photo-00.png" alt="project-4"> */}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
