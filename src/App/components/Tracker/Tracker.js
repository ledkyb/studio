import React, {Component} from 'react';
import './Tracker.scss';

class Tracker extends Component {
  render() {
    return (
        <div className="container tracker">

            <div className="secondary-navigation-container container">
              <nav className="secondary-navigation">
                <ul>

                  <li className="active" ><a href="#home" tabIndex="-1"> </a></li>
                  <li><a href="#about" tabIndex="-1"> </a></li>
                  <li><a href="#team" tabIndex="-1"> </a></li>
                  <li><a href="#blog" tabIndex="-1"> </a></li>
                  <li><a href="#services" tabIndex="-1"> </a></li>
                  <li><a href="#contact" tabIndex="-1"> </a></li>

                </ul>
              </nav>
            </div>

        </div>
    );
  }
}

export default Tracker;
