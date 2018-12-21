import React, {Component} from 'react';
import './Tracker.scss';

class Tracker extends Component {
  render() {
    return (
        <div className="container tracker">

            <div className="secondary-navigation-container container">
              <nav className="secondary-navigation">
                <ul>

                  <li className="active" ><a href="#home"> </a></li>
                  <li><a href="#about"> </a></li>
                  <li><a href="#team"> </a></li>
                  <li><a href="#blog"> </a></li>
                  <li><a href="#services"> </a></li>
                  <li><a href="#contact"> </a></li>

                </ul>
              </nav>
            </div>

        </div>
    );
  }
}

export default Tracker;
