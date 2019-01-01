import React, {Component} from 'react';
import './Nav.scss';
import Logo from './Logo/Logo';
import Hamburger from './Logo/Assets/menu.svg';
import Social from './Social/Social';

class Nav extends Component {
  componentDidMount() {
    this.positionTracker();
  }

  positionTracker(){
    const logo = document.getElementById('logo'),
        sections = document.querySelectorAll('[data-bg]');

    console.log('tracking');
    console.log(sections);

    window.addEventListener('scroll', e => {
      console.log('fired!');
    })

    if (document.body.contains(logo)){
      console.log(logo.offsetTop);
    }
  }

  switch() {
    const nav = document.getElementById('navbarNav'),
        menuButton = document.querySelector('.navbar-toggler');

    nav.classList.toggle('slide-nav');
    menuButton.classList.toggle('nav-rotated');
  }

  render() {
    return (
        <div className="container-fluid nav">
          <nav className="container">
            <div className="row">


              <div className="col col-md-1">
                <a id="logo" className="navbar-brand" href="https://www.google.com">
                  <Logo/>
                </a>
              </div>


              <div className="col col-md-7 offset-md-4">
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="https://www.google.com">Home <span
                          className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com">Contact</a>
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
                  <img src={Hamburger} alt="mobile menu"/>
                </button>

              </div>

            </div>
          </nav>
        </div>
    );
  }
}

export default Nav;
