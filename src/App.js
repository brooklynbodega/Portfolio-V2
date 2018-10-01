import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Projects from './Components/Projects';
import About from './Components/About';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Portfolio">
          <Header />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
