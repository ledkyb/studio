import React, {Component} from 'react';
import './Tracker.scss';

class Tracker extends Component {
  handleScrollToElement = (id) => {
		const elem = document.getElementById(id);
		elem.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
  }

  render() {
    return (
        <div className="container tracker">

            <div className="secondary-navigation-container container">
              <nav className="secondary-navigation">
                <ul>

                  <li className="active" onClick={() => this.handleScrollToElement("home")}><a href="#home"> </a></li>
                  <li onClick={() => this.handleScrollToElement("about")}><a href="#about"> </a></li>
                  <li onClick={() => this.handleScrollToElement("team")}><a href="#team"> </a></li>
                  <li onClick={() => this.handleScrollToElement("blog")}><a href="#blog"> </a></li>
                  <li onClick={() => this.handleScrollToElement("services")}><a href="#services"> </a></li>
                  <li onClick={() => this.handleScrollToElement("contact")}><a href="#contact"> </a></li>

                </ul>
              </nav>
            </div>

        </div>
    );
  }
}

export default Tracker;
