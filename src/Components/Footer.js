import React, {
  Component
} from 'react';
import '../App.css';

class Footer extends Component {

  // Function to return current year
  renderDate() {
    return new Date().getFullYear();
  }

  render() {
    return ( 
    
    <div className = "Footer"> 
      © Raúl Montero {this.renderDate()}
      </div>
    )
  }
}

export default Footer;
