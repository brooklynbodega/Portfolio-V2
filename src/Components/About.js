import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="About slide-in-blurred-right">
        <div className="photo">
          <img src = {require("../images/profile-photo-01.jpg")} alt="profile photo" title="profile photo" />
        </div>
        <div id="bio">
         <div id="bio-text">
          Hello, I'm Raúl Montero. Previously a financial administrator turned burgeoning developer based in Brooklyn, NY. Creating accessible applications with code that is composed and discernible is my modus operandi. I enjoy strategizing paths to success and encourage constructive communication to produce work of the highest quality. My goal is to immerse myself with a brand that is intent on crafting innovative, dynamic programming with an egalitarian ethos.
         </div>
          <div className="contact">
            <div id="social-links">
              <a href="https://www.linkedin.com/in/raul-montero/">
                <img src={ require("../images/linkedin-logo.svg")} alt="linkedin" title="linkedin"/>
              </a>
              <a href="https://github.com/brooklynbodega">
                <img src={ require("../images/github-logo.svg")} alt="github" title="github"/>
              </a>
              <a href="mailto:raul.amontero@gmail.com">
                <img src={ require("../images/gmail-logo.svg")} alt="gmail" title="gmail"/>
              <a href="https://www.facebook.com/montero.raul">
                <img src={ require("../images/facebook-logo.svg")} alt="facebook" title="facebook"/>
              </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;