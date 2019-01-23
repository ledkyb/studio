import React, {Component} from 'react';
import './Home.scss';


import textLogo from './Assets/logo-text-black.svg';
import Button from '../../Button/Buttons';

class Home extends Component {
  render() {
    return (
        <section id="home" className="row" data-bg="light" data-section="home">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col col-sm-10 col-md-8 col-lg-6">
                <img className="text-logo" src={textLogo} alt="Ledkyb Studios text logo"/>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col col-sm-10 col-md-8 col-lg-6 home-button">
                <Button link="#contact" label="start project" styles="project-button"/>
              </div>
            </div>

            <div className="row">
              <div className="col-10 offset-1">
                <p className="button-sub-text">Ready to start your project?</p>
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default Home;
