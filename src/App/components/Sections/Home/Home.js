import React, {Component} from 'react';
import Scroller from '../../Scroller/Scroller';
import './Home.scss';


import textLogo from './Assets/logo-text-black.svg';
import Button from '../../Button/Buttons';

class Home extends Component {
  render() {
    return (
        <section id="home" className="row" data-bg="light" data-section="home">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-10 col-lg-4 col-sm-6 col-md-6 align-items-end">
                <img className="text-logo" src={textLogo} alt="Ledkyb Studios text logo"/>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-lg-4 col-sm-6 col-md-6 align-items-end home-button">
                <Button link="#contact" label="start project" styles="project-button"/>
              </div>
            </div>

            <div className="row">
              <div className="col-10 offset-1">
                <p className="button-sub-text">Ready to start your project?</p>
              </div>
            </div>

            <div className="row">
              <div className="offset-5 col-2 mt-5">
                <Scroller color="orange" layers={3} />
              </div>
            </div>

          </div>
        </section>
    );
  }
}

export default Home;
