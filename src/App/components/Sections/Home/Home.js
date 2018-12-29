import React, {Component} from 'react';
import Scroller from '../../Scroller/Scroller';
import './Home.scss';


import textLogo from './Assets/logo-text-black.svg';
import Button from '../../Button/Buttons';

class Home extends Component {
  render() {
    return (
        <section id="home" className="row">
          <div className="container">

            <div className="row">
              <div className="col-10 offset-1 col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-md-6 offset-md-3">
                <img className="text-logo" src={textLogo} alt="Ledkyb Studios text logo"/>
              </div>
            </div>

            <div className="row">
              <div className="col-10 offset-1 col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-md-6 offset-md-3 home-button">
                <Button link="#contact" label="start project"/>
              </div>
            </div>

            <div className="row">
              <div className="col-10 offset-1">
                <p className="button-sub-text">Ready to start your project?</p>
              </div>
            </div>

            <div className="row scroller-row">
              <Scroller/>
            </div>

          </div>
        </section>
    );
  }
}

export default Home;
