import React, {Component} from 'react';
import './Nav.scss';

import togglerDark from './Logo/Assets/menu.svg';
import togglerLight from './Logo/Assets/menu-white.svg';

import Social from './Social/Social';

import darkLogo from './Logo/Assets/icon-color.svg';
import lightLogo from './Logo/Assets/icon-white.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.logo = {
      light: lightLogo,
      dark: darkLogo,
    };
    this.state = {
      bg: 'light',
      logo: this.logo['dark'],
    };
    this.switch = this.switch.bind(this);
  }

  componentDidMount() {
    this.positionTracker();
  }

  positionTracker() {
    window.addEventListener('scroll', e => {
      if (window.screen && window.screen.width <= 991){
        this.switchLogo();
      }
    });

  }

  switchLogo() {
    const logo = document.getElementById('logo'),
        sections = document.querySelectorAll('[data-section]'),
        scrollPosition = Number(document.documentElement.scrollTop) + 25;

    if (document.body.contains(logo)) {
      let selected = null;

      for (let section of sections) {
        if (scrollPosition > section.offsetTop) {
          selected = section;
        }
      }

      if (selected !== null && selected.dataset.bg !== this.state.bg) {

        this.setState({
          bg: selected.dataset.bg,
          logo: this.logo[selected.dataset.bg === 'light' ? 'dark' : 'light'],
        });
      }

    }
  }

  switch() {
    const nav = document.getElementById('navbarNav'),
        menuButton = document.querySelector('.navbar-toggler');

    nav.classList.toggle('slide-nav');
    menuButton.classList.toggle('nav-rotated');

    if (menuButton.classList.contains('nav-rotated') && this.state.bg === 'dark') {
      this.setState({ bg: 'light' })
    }
  }

  render() {
    return (
        <div id="nav" className="container-fluid">
          <nav className="container">
            <div className="row">


              <div className="col col-md-1">
                <a className="navbar-brand" href="/">
                  <img id="logo" src={this.state.logo}
                       alt="ledkyb studios logo"/>
                </a>
              </div>


              <div className="col col-md-7 offset-md-4">
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link"
                         href="#home">Home <span
                          className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                         href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                         href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                         href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                         href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"
                         href="#contact">Contact</a>
                    </li>
                  </ul>
                  <Social/>
                </div>

                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.switch}>
                  <img src={this.state.bg === 'dark' ? togglerLight : togglerDark} alt="mobile menu"/>
                </button>

              </div>

            </div>
          </nav>
        </div>
    );
  }
}

export default Nav;
