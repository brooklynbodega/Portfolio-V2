import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p>
          Raúl Montero
        </p>
        <Link to='/projects' >
       Projects
        </Link><span> </span>
        <Link to='/about'>
       About
        </Link>
      </div>
    )
  }
}

export default Header;