import React, { Component } from 'react'; 
import Nav from '../../Nav/Nav';
import './Home.scss';

import textLogo from './Assets/logo-text-black.svg';
import Button from '../../Button/Buttons';
import Scroller from '../../Scroller/Scroller';

class Home extends React.Component {
    componentWillMount(){

    }

    render(){
        return(
            <section id="home" className="row">
                <div className="container">

                  <div className="row">
                    <div className="col-12">
                      <Nav />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 offset-5">
                      <img className="text-logo" src={textLogo} alt="Ledkyb Studios text logo" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 offset-lg-5 col-sm-8 offset-sm-2 home-button">
                      <Button link="#contact" label="start project" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2 offset-5">
                      <p className="button-sub-text">Ready to start your project?</p>
                    </div>
                  </div>

                  <div className="row scroller-row">
                    <Scroller/>
                  </div>

                </div>
            </section>
        )
    }
}


export default Home;