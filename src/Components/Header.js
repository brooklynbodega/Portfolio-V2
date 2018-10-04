import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="header-title">
        <span className="logo puff-in-center"> rm</span><span className="sub-title" id="webdev"> Web Developer</span>
      </div>
      <div className="nav">
        <Link to='/projects' >
          Projects
        </Link><span> </span>
        <Link to='/about'>
          About
        </Link>
        </div>
      </div>
    )
  }
}

export default Header;