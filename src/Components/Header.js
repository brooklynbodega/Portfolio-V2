import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div className="header-title">
        Raúl Montero
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